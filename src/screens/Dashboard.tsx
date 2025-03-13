import '../App.css';
import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { fetchAuthSession } from "@aws-amplify/auth";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';
//import { fetchTrackers, Tracker } from "../api/api"; 

interface TrackerData {
    tracker_id: string;
    latitude: number;
    longitude: number;
    user_id: string;
}

function Dashboard() {


    const { user } = useAuthenticator((context) => [context.user]);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [trackers, setTrackers] = useState<TrackerData[]>([]);

    // Récupération du token dès que le composant est monté
    useEffect(() => {
        const getToken = async () => {
            try {
                const session = await fetchAuthSession();
                const token = session.tokens?.accessToken?.toString();
                if (token) {
                    setAccessToken(token);
                    console.log("Token Cognito récupéré:", token);
                } else {
                    console.warn("Aucun token disponible");
                }
            } catch (error) {
                console.error("Erreur lors de la récupération du token:", error);
            }
        };

        getToken();
    }, []);

    // Appel du Lambda dès que accessToken est disponible
    useEffect(() => {
        if (accessToken) {
            callLambda();
        }
    }, [accessToken]);

    // Fonction d'appel du Lambda avec le token
    // Fonction d'appel du Lambda avec le token
    const callLambda = async () => {
        try {
            const response = await fetch(
                "https://sdodu45cej.execute-api.eu-west-1.amazonaws.com/dev",
                {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        "Content-Type": "application/json"
                    }
                }
            );

            const data = await response.json();
            console.log("Données reçues du Lambda:", data);

            if (Array.isArray(data)) {
                setTrackers(data); // Stocke les trackers si la réponse est un tableau
            } else {
                console.warn("Les données reçues ne sont pas un tableau:", data);
            }
        } catch (error) {
            console.error("Erreur lors de l’appel du Lambda:", error);
        }
    };



    // const [trackers, setTrackers] = useState<Tracker[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);

    // // Récupérer les trackers à l'affichage du dashboard
    // useEffect(() => {
    //     async function loadTrackers() {
    //         setLoading(true);
    //         const data = await fetchTrackers();
    //         if (data) {
    //             setTrackers(data);
    //         }
    //         setLoading(false);
    //     }
    //     loadTrackers();
    // }, []);

    return (


        <div className="dashboard-page">
            {/* Section Header */}
            <div className="header">
                <Header />
            </div>
            <div className="dashboard-content">
                <h1>Welcome, {user?.signInDetails?.loginId?.split("@")[0].split(".")[0] || "Guest"} 👋</h1>
                <p>This is your secure area</p>

                {/* Carte affichant les trackers */}
                <Map />

                {accessToken ? <p>Token récupéré !</p> : <p>Chargement du token...</p>}

                {/* Liste des trackers récupérés */}
                <h2>Your Trackers</h2>

                <h2>Trackers reçus :</h2>
                {trackers.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Tracker ID</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                                <th>User ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trackers.map((tracker) => (
                                <tr key={tracker.tracker_id}>
                                    <td>{tracker.tracker_id}</td>
                                    <td>{tracker.latitude}</td>
                                    <td>{tracker.longitude}</td>
                                    <td>{tracker.user_id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Aucun tracker disponible.</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;
