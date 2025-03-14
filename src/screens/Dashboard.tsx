import '../App.css';
import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { fetchAuthSession } from 'aws-amplify/auth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';

interface TrackerData {
    tracker_id: string;
    latitude: number;
    longitude: number;
    user_id: string;
}

function Dashboard() {


    const { user } = useAuthenticator((context) => [context.user]);
    const [IdToken, setIdToken] = useState<string | null>(null);
    const [trackers, setTrackers] = useState<TrackerData[]>([]);

    useEffect(() => {
        const getToken = async () => {
            try {
                const session = await fetchAuthSession();
                const token = session.tokens?.idToken?.toString();  // Récupération du IdToken

                if (token) {
                    setIdToken(token);
                    console.log("IdToken récupéré:", token); // Vérification du token
                } else {
                    console.warn("Aucun IdToken trouvé !");
                }
            } catch (error) {
                console.error("Erreur lors de la récupération du IdToken:", error);
            }
        };

        getToken();
    }, []);


    useEffect(() => {
        if (IdToken) {
            callLambda();
        }
    }, [IdToken]);

    // Fonction d'appel du Lambda avec le token
    const callLambda = async () => {
        try {
            const response = await fetch(
                "https://sdodu45cej.execute-api.eu-west-1.amazonaws.com/dev",
                {
                    method: "GET",
                    mode: 'cors',
                    headers: {
                        "Authorization": `Bearer ${IdToken}`,
                        "Content-Type": "application/json"
                    },
                    credentials: 'include'
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



    return (


        <div className="dashboard-page">

                <Header />

            <div className="dashboard-content">
                <h1>Welcome, {user?.signInDetails?.loginId?.split("@")[0].split(".")[0] || "Guest"} 👋</h1>
                <p>This is your secure area</p>
                <p>oahdzed</p>

                {/* Carte affichant les trackers */}
                <Map />

                {IdToken ? (
                    <div>
                        <p>Token récupéré !</p>
                        <pre style={{ wordWrap: "break-word", whiteSpace: "pre-wrap" }}>
                            {IdToken}
                        </pre>
                    </div>
                ) : (
                    <p>Chargement du token...</p>
                )}

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
