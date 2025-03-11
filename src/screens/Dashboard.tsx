import '../App.css';
import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';
import { fetchTrackers, Tracker } from "../api/api"; 

function Dashboard() {
    const { user } = useAuthenticator();
    const [trackers, setTrackers] = useState<Tracker[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    // Récupérer les trackers à l'affichage du dashboard
    useEffect(() => {
        async function loadTrackers() {
            setLoading(true);
            const data = await fetchTrackers();
            if (data) {
                setTrackers(data);
            }
            setLoading(false);
        }
        loadTrackers();
    }, []);

    return (
        <div className="dashboard-page">
            <Header />
            <div className="dashboard-content">
                <h1>Welcome, {user?.signInDetails?.loginId?.split("@")[0].split(".")[0] || "Guest"} 👋</h1>
                <p>This is your secure area</p>

                {/* Carte affichant les trackers */}
                <Map />

                {/* Liste des trackers récupérés */}
                <h2>Your Trackers</h2>
                {loading ? (
                    <p>Loading trackers...</p>
                ) : trackers.length > 0 ? (
                    <ul>
                        {trackers.map((tracker) => (
                            <li key={tracker.tracker_id}>
                                <strong>ID:</strong> {tracker.tracker_id}, 
                                <strong> Latitude:</strong> {tracker.latitude}, 
                                <strong> Longitude:</strong> {tracker.longitude}, 
                                <strong> User:</strong> {tracker.user_id}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No trackers found.</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;
