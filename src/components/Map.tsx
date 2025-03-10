import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    
    console.log("ENV VARIABLES:", import.meta.env);

    const apiKey = import.meta.env.VITE_AMAZON_LOCATION_API_KEY;
    const awsRegion = "eu-west-1";
    const mapStyle = "Standard";

    if (!apiKey) {
      console.error("Amazon Location Service API Key is missing!");
      return;
    }

    const styleUrl = `https://maps.geo.${awsRegion}.amazonaws.com/v2/styles/${mapStyle}/descriptor?key=${apiKey}`;

    // Initialisation de la carte
    const map = new maplibregl.Map({
      container: mapContainerRef.current!,
      style: styleUrl,
      center: [25.24, 36.31], // Position initiale (longitude, latitude)
      zoom: 2, // Niveau de zoom initial
    });

    return () => map.remove(); // Nettoyage lors du démontage du composant
  }, []);

  return <div ref={mapContainerRef} style={{ width: "100%", height: "500px" }} />;
};

export default Map;
