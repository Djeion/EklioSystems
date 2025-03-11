import { useEffect } from "react";
import '../App.css';
import AOS from "aos";
import "aos/dist/aos.css"; // Import du CSS d'AOS


// Importer les images
import altran from '../assets/partner/altran.png';
import bouygue from '../assets/partner/bouygues.png';
import kineis from '../assets/partner/kineis.png';
import woleet from '../assets/partner/woleet.png';
import eut from '../assets/partner/eut.png';
import bpi from '../assets/partner/bpi.png';
import init from '../assets/partner/init.png';
import mines from '../assets/partner/mines.png';
import telecom from '../assets/partner/telecom.png';
import schema from '../assets/tracabilité/schema.svg';
import icon_geoloc from '../assets/solutions/icon-geolocalisation.png';
import icon_tra from '../assets/solutions/icon-tracabilite.png';
import icon_temps from '../assets/solutions/icon-temps.png';
import icon_esti from '../assets/solutions/icon-estimation.png';
import icon_donnees from '../assets/solutions/icon-donnees.png';
import icon_certi from '../assets/solutions/icon-certif.png';
import icon_horo from '../assets/solutions/icon-hordatage.png';
import icon_alerte from '../assets/solutions/icon-alerte.png';
import icon_reseau from '../assets/caractéristiques/icon-reseau-cellulaire.png';
import icon_interface from '../assets/caractéristiques/icon-interface.png';
import icon_geo from '../assets/caractéristiques/icon-geolocalisation.png';
import icon_batterie from '../assets/caractéristiques/icon-batterie.png';
import icon_autre from '../assets/caractéristiques/icon-autre.png';
import icon_radio from '../assets/certification/icon-radio.png';
import icon_secu from '../assets/certification/icon-securite.png';
import icon_physique from '../assets/certification/icon-physique.png';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false, 
        });
      }, []);

    return (
        <div>
            <div className="spacer"></div>

            {/* Section Header */}
            <div className="header">
                <Header />
            </div>

            {/* Section ContentPrez */}
            <div className="contentprez">
                <h2 className="presentation">
                    Test Repo privé
                    Welcome to our website developed with ReactJS.
                    We are currently in version 1.0.0.
                    Thank you for your interest in our application!
                    <br />
                </h2>
            </div>

            {/* Section Explication géoloc */}
            <div className="geoloc">
                <h1>1er Tracker hybride basse consommation LoRaWAN® / NB-IoT / LTE-M / Satellites, très grande autonomie</h1>
            </div>

            {/* Section Explication traçabilité */}
            <div className="trace">
                <div className="trace-grid">
                    <div className="trace-card">
                        <h2 className="section-title">Traceability Container</h2>
                        <div className="trace-features">
                            <p className="feature-item">Une traçabilité complète de la chaine logistique</p>
                            <p className="feature-item">Connectivité mondiale</p>
                            <p className="feature-item">Localisation de vos assets</p>
                        </div>
                    </div>
                    <div className="trace-image">
                        <img src={schema} alt="Schéma de traçabilité" />
                    </div>
                </div>
            </div>

            {/* Section solution */}
            <div className="solution">
                <h2 className="section-title">Fonctionnalités clés</h2>

                <div className="solution-grid">
                    <div className="solution-card">
                        <div className="solution-icon">
                            <img src={icon_geoloc} alt="Icône Géolocalisation" className="logo-solution" />
                        </div>
                        <h2>Géolocalisation</h2>
                        <p>Intérieur</p>
                        <p>Extérieur</p>
                    </div>

                    <div className="solution-card">
                        <div className="solution-icon">
                            <img src={icon_tra} alt="Icône Traçabilité" className="logo-solution" />
                        </div>
                        <h2>Traçabilité</h2>
                        <p>Détection entrée et sortie de zone</p>
                    </div>

                    <div className="solution-card">
                        <div className="solution-icon">
                            <img src={icon_temps} alt="Icône Temps d'utilisation" className="logo-solution" />
                        </div>
                        <h2>Temps d’utilisation</h2>
                        <p>Par période paramétrable</p>
                    </div>

                    <div className="solution-card">
                        <div className="solution-icon">
                            <img src={icon_esti} alt="Icône Estimation temps de trajet" className="logo-solution" />
                        </div>
                        <h2>Estimation temps de trajet</h2>
                        <p>En cours de développement</p>
                    </div>
                </div>

                <div className="solution-grid">
                    <div className="solution-card">
                        <div className="solution-icon">
                            <img src={icon_donnees} alt="Icône Données métiers" className="logo-solution" />
                        </div>
                        <h2>Les données métiers</h2>
                        <p>T° / H° / détection de choc</p>
                    </div>

                    <div className="solution-card">
                        <div className="solution-icon">
                            <img src={icon_certi} alt="Icône Certification Géolocalisation" className="logo-solution" />
                        </div>
                        <h2>Certification Géolocalisation opérateurs</h2>
                        <p>Opérateurs mobile public 4G et Satellitaires</p>
                    </div>

                    <div className="solution-card">
                        <div className="solution-icon">
                            <img src={icon_horo} alt="Icône Certification Horodatage" className="logo-solution" />
                        </div>
                        <h2>Certification Horodatage de vos données</h2>
                    </div>

                    <div className="solution-card">
                        <div className="solution-icon">
                            <img src={icon_alerte} alt="Icône Alerting" className="logo-solution" />
                        </div>
                        <h2>Alerting sur détection de seuil</h2>
                    </div>
                </div>
            </div>


            {/* Section caractéristiques */}
            <div className="caract">
                <h2 className="section-title">Caractéristiques de la solution</h2>

                {/* Première ligne avec 3 cartes */}
                <div className="caract-grid">
                    <div className="caract-card">
                        <div className="caract-icon">
                            <img src={icon_reseau} alt="Icône Réseau" className="logo-carac" />
                        </div>
                        <h2>Réseaux</h2>
                        <p>La balise utilisera les réseaux suivants en fonction des cas d'usage</p>
                        <p>Réseaux terrestres : LTE-M, NB-IoT, LoRaWAN®</p>
                        <p>Satellites : Kineis, Eutelsat, Sateliot</p>
                    </div>

                    <div className="caract-card">
                        <div className="caract-icon">
                            <img src={icon_interface} alt="Icône Interface" className="logo-carac" />
                        </div>
                        <h2>Interface</h2>
                        <p>- Audit de parc</p>
                        <p>    - Temps d'utilisation de l'actif</p>
                        <p>- Estimation de temps de trajet</p>
                        <p>- API disponible pour l'intégration dans un Système Technique tiers</p>
                    </div>

                    <div className="caract-card">
                        <div className="caract-icon">
                            <img src={icon_geo} alt="Icône Géolocalisation" className="logo-carac" />
                        </div>
                        <h2>Géolocalisation</h2>
                        <p>- Suivi permettant un tracking fin et précis par balise ou groupe de balise</p>
                        <p>- Géolocalisation issue de différentes technologies : GNSS, Satélitte via effet Doppler, opérateurs Télécom, WIFI</p>
                        <p>- Hyper géolocalisation</p>
                        <p>- Géofencing</p>
                        <p>- Certification de la géolocalisation valable juridiquement en Europe</p>
                    </div>
                </div>

                {/* Deuxième ligne avec 2 cartes */}
                <div className="caract-grid-2">
                    <div className="caract-card">
                        <div className="caract-icon">
                            <img src={icon_batterie} alt="Icône Énergie" className="logo-carac" />
                        </div>
                        <h2>Energie</h2>
                        <p>- Très grande autonomie des balises en fonction des cas d'usage</p>
                        <p>- Algorithme d'optimisation énergétique</p>
                        <p>- Système d'énergie harvesting</p>
                    </div>

                    <div className="caract-card">
                        <div className="caract-icon">
                            <img src={icon_autre} alt="Icône Autre" className="logo-carac" />
                        </div>
                        <h2>Autre</h2>
                        <p>- Très haut niveau de sécurité des données</p>
                        <p>- Mise à jour du firmware et Paramétrage de la balise à distance</p>
                        <p>Une intelligence embarquée permet de détecter le meilleur réseau pour l'émission</p>
                    </div>
                </div>
            </div>


            {/* Section certification */}
            <div className="certif">
                <h2 className="section-title">Certifications</h2>

                <div className="certif-grid">

                    <div className="certif-card">
                        <h2>Radio</h2>
                        <img src={icon_radio} className="logo-certif" alt="Icône certification" />
                        <div className="certif-items">
                            <span>CE</span>
                            <span>EN300.200</span>
                            <span>FCC 15.247</span>
                            <span>Argos</span>
                        </div>
                    </div>


                    <div className="certif-card">
                        <h2>Sécurité</h2>
                        <img src={icon_secu} className="logo-certif" alt="Icône certification" />
                        <div className="certif-items">
                            <span>ISO 27001</span>
                            <span>GDPR</span>
                            <span>ANSSI</span>
                        </div>
                    </div>


                    <div className="certif-card">
                        <h2>Physique</h2>
                        <img src={icon_physique} className="logo-certif" alt="Icône certification" />
                        <div className="certif-items">
                            <span>IP69</span>
                            <span>IK10</span>
                            <span>MIL-STD-810</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Partenariat */}
            <div className="Partenariat">
                <h1>Partnership container</h1>

                <div className="industrial">
                    <h2>Industrial Partners</h2>
                    <div className="logos">
                        <a href="https://www.kineis.com" target="_blank" rel="noopener noreferrer">
                            <img src={kineis} className="logo" alt="Kineis" data-aos="fade-right" />
                        </a>
                        <a href="https://www.altran.com" target="_blank" rel="noopener noreferrer">
                            <img src={altran} className="logo" alt="Altran" data-aos="fade-right" />
                        </a>
                        <a href="https://www.eutelsat.com/fr/home.html" target="_blank" rel="noopener noreferrer">
                            <img src={eut} className="logo" alt="eutlelsat group" data-aos="fade-right" />
                        </a>
                        <a href="https://www.bouyguestelecom.fr" target="_blank" rel="noopener noreferrer">
                            <img src={bouygue} className="logo" alt="Bouygues Telecom" data-aos="fade-right" />
                        </a>
                        <a href="https://www.woleet.io" target="_blank" rel="noopener noreferrer">
                            <img src={woleet} className="logo" alt="Woleet" data-aos="fade-right" />
                        </a>
                    </div>
                </div>

                <div className="financial">
                    <h2>Financial Partners</h2>
                    <div className="logos">
                        <a href="https://www.imt.fr" target="_blank" rel="noopener noreferrer">
                            <img src={mines} className="logo2" alt="Mines" data-aos="fade-right" />
                        </a>
                        <a href="https://www.initiative-grandesecoles.fr" target="_blank" rel="noopener noreferrer">
                            <img src={init} className="logo2" alt="init" data-aos="fade-right" />
                        </a>
                        <a href="https://www.telecom-paris.fr" target="_blank" rel="noopener noreferrer">
                            <img src={telecom} className="logo2" alt="Telecom" data-aos="fade-right" />
                        </a>
                        <a href="https://presse.bpifrance.fr" target="_blank" rel="noopener noreferrer">
                            <img src={bpi} className="logo2" alt="Bpi" data-aos="fade-right" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Section Footer */}
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default Home;