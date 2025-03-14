import React, { useEffect, useRef } from "react";
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
            center: [2.3522, 48.8566], // 🔹 Position par défaut (Paris)
            zoom: 10,
        });

        map.addControl(new maplibregl.NavigationControl(), "top-right");

        // 🔹 Ajouter les marqueurs pour chaque tracker
        trackers.forEach((tracker) => {
            new maplibregl.Marker()
                .setLngLat([tracker.longitude, tracker.latitude])
                .setPopup(new maplibregl.Popup().setHTML(`<b>Tracker ID:</b> ${tracker.tracker_id}`))
                .addTo(map);
        });

        return () => map.remove();
    }, [trackers]); // 🔹 Mettre à jour les marqueurs quand `trackers` change

    return <div ref={mapContainerRef} className="map" />;
};

export default Map;
