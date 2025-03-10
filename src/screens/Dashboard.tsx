import '../App.css';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';



function Dashboard() {

    const { user } = useAuthenticator();


    return (

        <div className="dashboard-page">
            <Header />
            <div className="dashboard-content">
                <h1>Welcome, {user?.username || "Guest"} 👋</h1>
                <p>This is your secure area</p>
                <Map />

            </div>
            <Footer />
        </div>

    );
}

export default Dashboard;
