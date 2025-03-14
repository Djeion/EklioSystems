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
import schema1 from '../assets/tracabilité/schema.png';
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
import Contact from '../components/Contact';

function Home() {


        useEffect(() => {
          // Initialisation d'AOS pour l'animation au scroll
          AOS.init({ duration: 1000 });
      
          // Intersection Observer pour la gestion de l'animation des titres
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible'); // Ajouter la classe visible
                } else {
                  entry.target.classList.remove('visible'); // Supprimer la classe visible si l'élément sort de la fenêtre
                }
              });
            },
            { threshold: 0.5 } // Observer quand 50% de l'élément est visible
          );
      
          // Sélectionner tous les titres de sections et les observer
          const titles = document.querySelectorAll('.section-title');
          titles.forEach((title) => {
            observer.observe(title);
          });
      
          // Nettoyage de l'observation lors du démontage du composant
          return () => {
            titles.forEach((title) => {
              observer.unobserve(title);
            });
          };
        }, []);
      
        useEffect(() => {
          // Fonction pour gérer le scroll et ajouter l'effet fade-out
          const handleScroll = () => {
            const textElement = document.querySelector('.presentation');
            if (textElement) {
              const scrollPosition = window.scrollY;
              const triggerPoint = 100; // Ajuste cette valeur en fonction du moment où tu veux que l'animation commence.
      
              if (scrollPosition > triggerPoint) {
                textElement.classList.add('fade-out');
              } else {
                textElement.classList.remove('fade-out');
              }
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          // Nettoyage de l'événement de scroll lors du démontage
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
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
                        Welcome to our IoT Tracker Platform
                        Empowering the Future with Advanced IoT Tracking Solutions
                        <br />
                    </h2>
                </div>
    
                {/* Section géoloc */}
                <div className="geoloc" data-aos="fade-up">
                    {/* Titre principal */}
                    <h1>The Ultimate Hybrid IoT Tracker</h1>
                    <h1>Multi-Connectivity & Ultra-Autonomous</h1>
                    
                    {/* Sections technologie */}
                    <div className="technologies-container">
                        <div className="technology-section">
                            <h2>LoRaWAN®</h2>
                        </div>
                        <div className="technology-section">
                            <h2>NB-IoT</h2>
                        </div>
                        <div className="technology-section">
                            <h2>LTE-M</h2>
                        </div>
                        <div className="technology-section">
                            <h2>GPS</h2>
                        </div>
                    </div>
                </div>
    
    
                {/* Section traçabilité */}
                <div className="trace" data-aos="fade-up">
                    <div className="trace-grid">
                        <div className="trace-card">
                            <h2 className="section-title">Full Traceability for Your Assets</h2>
                            <div className="trace-features">
                                <p className="feature-item">Complete Supply Chain Transparency</p>
                                <p className="feature-item">Global Connectivity</p>
                                <p className="feature-item">Localized Asset Management</p>
                            </div>
                        </div>
                        <div className="trace-image">
                            <img src={schema1} alt="Schéma de traçabilité" />
                        </div>
                    </div>
                </div>
    
                   {/* Section Solution */}
                <div className="solution" data-aos="fade-up">
                    <h2 className="section-title">Key Features</h2>
    
                    <div className="solution-grid">
                        <div className="solution-card">
                            <div className="solution-icon">
                                <img src={icon_geoloc} alt="Geolocation Icon" className="logo-solution" />
                            </div>
                            <h2>Geolocation</h2>
                            <p>Track assets indoors and outdoors</p>
                        </div>
    
                        <div className="solution-card">
                            <div className="solution-icon">
                                <img src={icon_tra} alt="Traceability Icon" className="logo-solution" />
                            </div>
                            <h2>Traceability</h2>
                            <p>Monitor zone entry and exit points</p>
                        </div>
    
                        <div className="solution-card">
                            <div className="solution-icon">
                                <img src={icon_temps} alt="Usage Time Icon" className="logo-solution" />
                            </div>
                            <h2>Usage Time</h2>
                            <p>Track by customizable periods</p>
                        </div>
    
                        <div className="solution-card">
                            <div className="solution-icon">
                                <img src={icon_esti} alt="Travel Time Estimation Icon" className="logo-solution" />
                            </div>
                            <h2>Travel Time Estimation</h2>
                            <p>Real-time predictions based on route and traffic</p>
                        </div>
                    </div>
    
                    <div className="solution-grid">
                        <div className="solution-card">
                            <div className="solution-icon">
                                <img src={icon_donnees} alt="Business Data Icon" className="logo-solution" />
                            </div>
                            <h2>Business Data</h2>
                            <p>Temperature, Humidity, Shock detection</p>
                        </div>
    
                        <div className="solution-card">
                            <div className="solution-icon">
                                <img src={icon_certi} alt="Geolocation Certification Icon" className="logo-solution" />
                            </div>
                            <h2>Geolocation Certification</h2>
                            <p>Mobile operators 4G and satellite networks</p>
                        </div>
    
                        <div className="solution-card">
                            <div className="solution-icon">
                                <img src={icon_horo} alt="Timestamp Certification Icon" className="logo-solution" />
                            </div>
                            <h2>Timestamp Certification</h2>
                            <p>Validate your data with accurate time stamps</p>
                        </div>
    
                        <div className="solution-card">
                            <div className="solution-icon">
                                <img src={icon_alerte} alt="Alert Icon" className="logo-solution" />
                            </div>
                            <h2>Threshold Alerts</h2>
                            <p>Receive real-time notifications based on set criteria</p>
                        </div>
                    </div>
                </div>
    
     
                {/* Section Features */}
                <div className="caract" data-aos="fade-up">
                    <h2 className="section-title">Solution Features</h2>
    
                    {/* Première ligne avec 3 cartes */}
                    <div className="caract-grid">
                        <div className="caract-card">
                            <div className="caract-icon">
                                <img src={icon_reseau} alt="Network Icon" className="logo-carac" />
                            </div>
                            <h2>Networks</h2>
                            <p>Supports various networks based on use cases:</p>
                            <p>- Terrestrial: LTE-M, NB-IoT, LoRaWAN®</p>
                            <p>- Satellite: Kineis, Eutelsat, Sateliot</p>
                        </div>
    
                        <div className="caract-card">
                            <div className="caract-icon">
                                <img src={icon_interface} alt="Interface Icon" className="logo-carac" />
                            </div>
                            <h2>Interface</h2>
                            <p>- Fleet audit</p>
                            <p>- Asset usage time tracking</p>
                            <p>- Travel time estimation</p>
                            <p>- API for third-party system integration</p>
                        </div>
    
                        <div className="caract-card">
                            <div className="caract-icon">
                                <img src={icon_geo} alt="Geolocation Icon" className="logo-carac" />
                            </div>
                            <h2>Geolocation</h2>
                            <p>- Precise tracking by individual or grouped beacons</p>
                            <p>- Multiple geolocation technologies: GNSS, Satellite Doppler effect, Telecom operators, Wi-Fi</p>
                            <p>- Hyper-geolocation</p>
                            <p>- Geofencing</p>
                            <p>- Legal geolocation certification in Europe</p>
                        </div>
                    </div>
    
                    {/* Deuxième ligne avec 2 cartes */}
                    <div className="caract-grid-2">
                        <div className="caract-card">
                            <div className="caract-icon">
                                <img src={icon_batterie} alt="Energy Icon" className="logo-carac" />
                            </div>
                            <h2>Energy</h2>
                            <p>- Long-lasting beacon autonomy based on use cases</p>
                            <p>- Energy optimization algorithm</p>
                            <p>- Energy harvesting system</p>
                        </div>
    
                        <div className="caract-card">
                            <div className="caract-icon">
                                <img src={icon_autre} alt="Other Icon" className="logo-carac" />
                            </div>
                            <h2>Other</h2>
                            <p>- High-level data security</p>
                            <p>- Remote firmware updates and beacon configuration</p>
                            <p>- Embedded intelligence for optimal network selection</p>
                        </div>
                    </div>
                </div>
    
    
                {/* Section certification */}
                <div className="certif" data-aos="fade-up">
                    <h2 className="section-title">Certifications</h2>
                    
                    <div className="certif-grid">
                    
                        <div className="certif-card">
                            <h2>Radio</h2>
                            <img src={icon_radio} className="certif-logo" alt="Certification Icon" />
                            <div className="certif-items">
                                <span>CE</span>
                                <span>EN300.200</span>
                                <span>FCC 15.247</span>
                                <span>Argos</span>
                            </div>
                        </div>
    
                        <div className="certif-card">
                            <h2>Security</h2>
                            <img src={icon_secu} className="certif-logo" alt="Certification Icon" />
                            <div className="certif-items">
                                <span>ISO 27001</span>
                                <span>GDPR</span>
                                <span>ANSSI</span>
                            </div>
                        </div>
    
                        <div className="certif-card">
                            <h2>Physical</h2>
                            <img src={icon_physique} className="certif-logo" alt="Certification Icon" />
                            <div className="certif-items">
                                <span>IP69</span>
                                <span>IK10</span>
                                <span>MIL-STD-810</span>
                            </div>
                        </div>
                    </div>
                </div>
    
    
                {/* Section Partenariat */}
                <div className="Partenariat" data-aos="fade-up">
                <h2 className="section-title">Partnerships</h2>
                
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
    
                {/* Section Contact */}
                <div className="Contact">
                    <Contact />
                </div>
    
                {/* Section Footer */}
                <div className="footer">
                    <Footer />
                </div>
            </div>
        );
    
    }
    export default Home;