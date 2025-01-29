import React, { useEffect, useState } from "react";
import "../styles/header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../img/logo.png";
import { FaSun, FaMoon } from "react-icons/fa";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleColorMode = () => {
    const newBgColor = isDarkMode ? "rgb(242, 235, 217)" : "rgb(30, 30, 30)";
    const newTextColor = isDarkMode ? "black" : "white";
    document.documentElement.style.setProperty("--clr-bg", newBgColor);
    document.documentElement.style.setProperty("--text-sec", newTextColor);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="container-nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              {["Sobre mí", "Experiencia", "Certificados", "Contacto"].map(
                (item, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      className="nav-link"
                      href={`#${item.toLowerCase().replace(" ", "")}`}
                      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                      data-aos-delay={`${300 * (index + 1)}`}
                      data-aos-duration="1000"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}

              <li className="nav-item">
                <a
                  className="nav-link download-btn"
                  href="/cv.pdf"
                  download="mi-archivo.pdf"
                  data-aos="fade-up"
                  data-aos-delay="1500"
                >
                  Descarga CV
                </a>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link color-toggle-btn no-brackets"
                  onClick={toggleColorMode}
                  data-aos="fade-up"
                  data-aos-delay="1500"
                >
                  {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;