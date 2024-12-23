import React, { useEffect, useState } from "react";
import "../styles/header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../img/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;





