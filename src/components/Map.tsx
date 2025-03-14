import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface Tracker {
  tracker_id: string;
  latitude: number;
  longitude: number;
}

interface MapProps {
  trackers: Tracker[];
}

const Map: React.FC<MapProps> = ({ trackers }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const [selectedTrackers, setSelectedTrackers] = useState<string[]>([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_AMAZON_LOCATION_API_KEY;
    const awsRegion = "eu-west-1";
    const mapName = "dashboard-map";

    if (!apiKey) {
      console.error("Amazon Location Service API Key is missing!");
      return;
    }

    const styleUrl = `https://maps.geo.${awsRegion}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`;

    const map = new maplibregl.Map({
      container: mapContainerRef.current!,
      style: styleUrl,
      center: [2.3522, 48.8566], // Position par défaut (Paris)
      zoom: 5,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");
    mapRef.current = map;

    return () => map.remove();
  }, []);

  // 🔹 Sélectionner automatiquement le premier tracker
  useEffect(() => {
    if (trackers.length > 0 && selectedTrackers.length === 0) {
      setSelectedTrackers([trackers[0].tracker_id]); // Sélectionne le premier tracker
    }
  }, [trackers]);

  useEffect(() => {
    if (!mapRef.current) return;
    const map = mapRef.current;

    // Supprime les anciens marqueurs avant d'en ajouter de nouveaux
    document.querySelectorAll(".tracker-marker").forEach(marker => marker.remove());

    const selected = trackers.filter(tracker => selectedTrackers.includes(tracker.tracker_id));

    if (selected.length > 0) {
      const bounds = new maplibregl.LngLatBounds();
      
      selected.forEach(tracker => {
        const marker = new maplibregl.Marker({ color: "red" })
          .setLngLat([tracker.longitude, tracker.latitude])
          .setPopup(
            new maplibregl.Popup().setHTML(`
              <strong>Tracker ID:</strong> ${tracker.tracker_id}<br>
              <strong>Latitude:</strong> ${tracker.latitude}<br>
              <strong>Longitude:</strong> ${tracker.longitude}
            `)
          )
          .addTo(map);

        marker.getElement().classList.add("tracker-marker");
        bounds.extend([tracker.longitude, tracker.latitude]); // Ajoute aux limites
      });

      // 🔹 Ajuste la carte pour voir tous les trackers sélectionnés
      if (selected.length === 1) {
        map.setCenter([selected[0].longitude, selected[0].latitude]); // Centre sur un seul tracker
        map.setZoom(10); // Zoom par défaut sur un tracker
      } else {
        map.fitBounds(bounds, { padding: 50 }); // Ajuste la carte pour voir tous les trackers
      }
    }
  }, [trackers, selectedTrackers]);

  // 🔹 Gérer la sélection des trackers
  const handleTrackerSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedTrackers(prev =>
      checked ? [...prev, value] : prev.filter(id => id !== value)
    );
  };

  return (
    <div className="map-container">
      {/* 🔹 Menu déroulant pour sélectionner les trackers */}
      <details className="tracker-menu">
        <summary>📍 Sélectionner vos Trackers</summary>
        <div className="tracker-list">
          {trackers.map(tracker => (
            <label key={tracker.tracker_id}>
              <input
                type="checkbox"
                value={tracker.tracker_id}
                checked={selectedTrackers.includes(tracker.tracker_id)}
                onChange={handleTrackerSelection}
              />
              {tracker.tracker_id}
            </label>
          ))}
        </div>
      </details>

      {/* 🔹 La carte */}
      <div ref={mapContainerRef} className="map" />
    </div>
  );
};

export default Map;
