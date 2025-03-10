import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [selectedTrackers, setSelectedTrackers] = useState<string[]>([]);

  
  // 🔹 Fake trackers (à remplacer plus tard par des vrais)
  const trackers = [
    { id: "tracker-1", name: "Tracker Alpha" },
    { id: "tracker-2", name: "Tracker Beta" },
    { id: "tracker-3", name: "Tracker Gamma" },
  ];

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
      center: [2.3522, 48.8566], // [Longitude, Latitude]
      zoom: 10,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    return () => map.remove();
  }, []);

  // 🔹 Gérer la sélection des trackers
  const handleTrackerSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedTrackers(prev =>
      checked ? [...prev, value] : prev.filter(id => id !== value)
    );
  };

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
              {tracker.name}
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
