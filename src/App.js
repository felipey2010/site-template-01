import "./css/App.css";
import { FaUserCircle } from "react-icons/fa";
import logo from "./images/logo.png";
import { useState } from "react";
import Home from "./pages/home";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleToggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header className="header-container">
        <div className="top">
          <div className="top-container">
            <a href="#">
              <FaUserCircle />
              <span>Área do Cliente</span>
            </a>
          </div>
        </div>
        <div className="nav">
          <a href="#" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="hamburger-menu" onClick={handleToggleMenu}>
            {menuOpen ? (
              <div className="hamburger-menu-opened">
                <div className="hamburger-menu-first-bar"></div>
                <div className="hamburger-menu-second-bar"></div>
              </div>
            ) : (
              <div className="hamburger-menu-closed">
                <div className="hamburger-menu-bars"></div>
                <div className="hamburger-menu-bars"></div>
                <div className="hamburger-menu-bars"></div>
              </div>
            )}
          </div>
          <nav className="navbar">
            <div className="navbar-links">
              <ul className="nav-list">
                <li className="nav-link">Serviços</li>
                <li className="nav-link">Blog</li>
                <li className="nav-link">Fale com a gente</li>
                <li className="nav-link">Planos</li>
                <li className="nav-link">Sobre Nós</li>
              </ul>
            </div>
          </nav>
        </div>
        {menuOpen && (
          <div className="nav-mobile">
            <nav className="navbar-mobile">
              <div className="navbar-mobile-links">
                <ul className="nav-mobile-list">
                  <li className="nav-mobile-link">Serviços</li>
                  <li className="nav-mobile-link">Planos</li>
                  <li className="nav-mobile-link">Blog</li>
                  <li className="nav-mobile-link">Fale com a gente</li>
                  <li className="nav-link">Sobre Nós</li>
                </ul>
              </div>
            </nav>
          </div>
        )}
      </header>
      <>
        <Home />
      </>
    </>
  );
}

/*
CREATING THIS SITE
https://www.advys.com.br/

*/
