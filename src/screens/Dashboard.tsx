import '../App.css';
import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { fetchAuthSession } from 'aws-amplify/auth';
import Header from '../components/Header';
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
    const [rawData, setRawData] = useState("");
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

        if (data.trackers) {
            setTrackers(data.trackers); // Stocker les trackers réels
        }

        setRawData(JSON.stringify(data, null, 2)); // Affichage JSON
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

                {/* Carte affichant les trackers */}
                <Map trackers={trackers} />







                <h2>Trackers reçus :</h2>

                <pre>{rawData}</pre>

                
            </div>
        </div>
    );
}

export default Dashboard;
