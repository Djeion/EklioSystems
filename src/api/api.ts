export interface Tracker {
    tracker_id: string;
    latitude: number;
    longitude: number;
    user_id: string;
}

const API_URL = "https://sdodu45cej.execute-api.eu-west-1.amazonaws.com/dev";

export async function fetchTrackers(): Promise<Tracker[] | null> {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur lors de la récupération des trackers :", error);
        return null;
    }
}
