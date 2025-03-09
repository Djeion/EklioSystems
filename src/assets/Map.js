import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "../App.css";

const Map = ({ user }) => {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const [trackers, setTrackers] = useState([]);
  const [selectedTrackers, setSelectedTrackers] = useState([]);

  useEffect(() => {
    const mapName = "dashboard-map";
    const region = process.env.REACT_APP_AWS_REGION?.trim();
    const apiKey = process.env.REACT_APP_AWS_LOCATION_API_KEY?.trim();

    if (!apiKey || !region) {
      console.error("🚨 ERREUR : Clé API ou région AWS manquante !");
      return;
    }

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`,
      center: [2.3522, 48.8566],
      zoom: 10,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");
    mapRef.current = map;

    async function fetchTrackers() {
      if (!user) return;

      try {
        const response = await fetch(`http://localhost:3001/trackers/${user.username}`);
        const data = await response.json();
        setTrackers(data);

        if (data.length > 0) {
          setSelectedTrackers([data[0].id]); 
          addMarkersToMap(data.filter(t => t.id === data[0].id));
        }
      } catch (error) {
        console.error("⚠️ Erreur lors de la récupération des trackers :", error);
      }
    }

    fetchTrackers();

    return () => map.remove();
  }, [user]);

  function addMarkersToMap(trackersToShow) {
    if (!mapRef.current) return;
    
    // 🔹 Supprimer les anciens marqueurs
    document.querySelectorAll(".maplibregl-marker").forEach(marker => marker.remove());

    // 🔹 Ajouter de nouveaux marqueurs
    trackersToShow.forEach(tracker => {
      new maplibregl.Marker()
        .setLngLat([tracker.lon, tracker.lat])
        .addTo(mapRef.current);
    });

    // 🔹 Gérer le centrage et le zoom
    if (trackersToShow.length === 1) {
      // 📍 Centrer sur un seul tracker
      mapRef.current.setCenter([trackersToShow[0].lon, trackersToShow[0].lat]);
      mapRef.current.setZoom(12);
    } else if (trackersToShow.length > 1) {
      // 🔍 Ajuster la carte pour voir tous les trackers sélectionnés
      const bounds = new maplibregl.LngLatBounds();
      trackersToShow.forEach(tracker => bounds.extend([tracker.lon, tracker.lat]));
      mapRef.current.fitBounds(bounds, { padding: 50, maxZoom: 12 });
    }
  }

  function handleTrackerSelection(event) {
    const trackerId = parseInt(event.target.value);
    let updatedSelectedTrackers;

    if (event.target.checked) {
      updatedSelectedTrackers = [...selectedTrackers, trackerId];
    } else {
      updatedSelectedTrackers = selectedTrackers.filter(id => id !== trackerId);
    }

    setSelectedTrackers(updatedSelectedTrackers);
    const selectedTrackersData = trackers.filter(t => updatedSelectedTrackers.includes(t.id));
    addMarkersToMap(selectedTrackersData);
  }

  return (
    <div className="map-container">
      {/* 🔹 Menu déroulant des trackers */}
      <details className="tracker-menu">
        <summary>📍 Select your Tracker(s)</summary>
        <div className="tracker-list">
          {trackers.map(tracker => (
            <label key={tracker.id}>
              <input
                type="checkbox"
                value={tracker.id}
                checked={selectedTrackers.includes(tracker.id)}
                onChange={handleTrackerSelection}
              />
              Tracker {tracker.id}
            </label>
          ))}
        </div>
      </details>

      {/* 🔹 La carte */}
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default Map;
