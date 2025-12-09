import React, { useEffect, useState } from "react";
import "../styles/header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../img/logo.png";
import { FaSun, FaMoon } from "react-icons/fa";

function Header() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  // 🌙 REAL THEME TOGGLE  
  const toggleColorMode = () => {
    document.documentElement.classList.toggle("light");
    setIsLightMode(!isLightMode);
  };

  return (
    <header className="header-wrapper">
      {/* NAV */}
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto nav-links">
              {["Sobre mí", "Experiencia", "Certificados", "Contacto"].map(
                (item, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      className="nav-link"
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      data-aos="fade-down"
                      data-aos-delay={200 * (index + 1)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}

              <li className="nav-item">
                <a
                  className="nav-link cv-btn"
                  href="/cv.pdf"
                  download="CV-IsraelGajardo.pdf"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                >
                  Descargar CV
                </a>
              </li>

              {/* 🌙 SUN / MOON BUTTON */}
              <li className="nav-item">
                <button
                  className="nav-link color-toggle-btn no-brackets"
                  onClick={toggleColorMode}
                  data-aos="zoom-in"
                  data-aos-delay="900"
                >
                  {isLightMode ? <FaMoon /> : <FaSun />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-container">
        <div className="hero-content" data-aos="fade-up" data-aos-delay="400">
          <h1 className="hero-title">
            Hola, soy <span className="accent">Israel Gajardo</span>
          </h1>

          <h2 className="hero-subtitle">
            Full-Stack Senior Developer & Technical Lead
          </h2>

          <p className="hero-description">
            Especializado en integraciones empresariales, automatización de
            procesos y desarrollo de soluciones completas con React, Node.js,
            MongoDB y SAP Business One. Experiencia liderando proyectos
            críticos, creando microservicios, APIs escalables y plataformas de
            alto rendimiento.
          </p>

          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="600">
            <a className="hero-btn primary" href="#contacto">
              Contáctame
            </a>
            <a className="hero-btn secondary" href="/cv.pdf" download>
              Descargar CV
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
