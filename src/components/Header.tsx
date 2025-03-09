import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import logo from "../assets/logo.png";
import "../App.css";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuthenticator();

  // Fonction pour scroller vers une section spécifique
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => { // ✅ Ajout d'un timeout pour attendre le chargement du DOM
      const sectionElement = document.querySelector(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Section "${sectionId}" introuvable.`);
      }
    }, 100); 
  };

  // Gestion du clic sur le logo
  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // ✅ Empêche le rechargement de la page
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => scrollToSection(".spacer"), 200); // ✅ Scroll après navigation
    } else {
      scrollToSection(".spacer"); // ✅ Si déjà sur "/", scroll directement
    }
  };

  // Fonction pour gérer la navigation et le scroll
  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 300); // ✅ Attente du DOM avant le scroll
    } else {
      scrollToSection(sectionId);
    }
  };

  // Fonction pour gérer la déconnexion
  const handleSignOut = () => {
    signOut();
    navigate("/", { replace: true }); // Redirige vers Home après déconnexion
  };

  return (
    <header className="header">
      {/* Logo à gauche */}
      <div className="logo-container" style={{ cursor: "pointer" }} role="button" aria-label="Retourner à l'accueil">
        <Link to="/" onClick={handleLogoClick}>
          <img src={logo} alt="Logo de l'entreprise" className="logohead" />
        </Link>
      </div>

      {/* Boutons centraux sauf sur la page Dashboard */}
      {location.pathname !== "/dashboard" && (
        <div className="central-container">
          <button className="custom-button" onClick={() => handleNavClick(".footer")} aria-label="À propos">About Us</button>
          <button className="custom-button" onClick={() => handleNavClick(".Partenariat")} aria-label="Partenaires">Partnership</button>
          <button className="custom-button" onClick={() => handleNavClick(".Contact")} aria-label="Contact">Contact</button>
        </div>
      )}

      {/* Bouton Connexion - Visible seulement si l'utilisateur n'est PAS connecté */}
      {!user && location.pathname !== "/dashboard" && (
        <div className="connexion-container">
          <Link to="/dashboard">
            <button className="custom-button" aria-label="Aller à la page de connexion">Login</button>
          </Link>
        </div>
      )}

      {/* Bouton Déconnexion - Visible UNIQUEMENT si l'utilisateur est connecté ET sur `/dashboard` */}
      {user && location.pathname === "/dashboard" && (
        <div className="connexion-container">
          <button className="custom-button" onClick={handleSignOut} aria-label="Déconnexion">Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
