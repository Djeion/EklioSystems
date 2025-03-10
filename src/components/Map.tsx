import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_AMAZON_LOCATION_API_KEY; // Récupération de la clé API
    const awsRegion = "eu-west-1"; // Remplace par ta région AWS
    const mapName = "dashboard-map"; // Le nom de la carte que tu veux utiliser

    if (!apiKey) {
      console.error("Amazon Location Service API Key is missing!");
      return;
    }

    // URL du style spécifique à ta carte Amazon Location Service
    const styleUrl = `https://maps.geo.${awsRegion}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`;

    // Initialisation de la carte
    const map = new maplibregl.Map({
      container: mapContainerRef.current!,
      style: styleUrl, // Utilisation du style personnalisé
      center: [2.3522, 48.8566], // [Longitude, Latitude] - Exemple pour Paris
      zoom: 5, // Niveau de zoom initial
    });

    return () => map.remove(); // Nettoyage de la carte au démontage du composant
  }, []);

  return <div ref={mapContainerRef} style={{ width: "100%", height: "500px" }} />;
};

export default Map;
