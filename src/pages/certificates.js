import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import desarrolloWeb from "../img/desarrollo-web.png";
import js from "../img/javaScript.png";
import reactJs from "../img/react.png";
import frontEnd from "../img/desarrollo-frontend.png";
import losLeones from "../img/los-leones.jpg";
import "../styles/certificates.css";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const certificatesCourses = [
    { img: js },
    { img: desarrolloWeb },
    { img: reactJs },
  ];

  const certificatesCareers = [
    { img: losLeones },
    { img: frontEnd },
  ];

  return (
    <section className="certificates" id="certificados">
      <h1 className="certificates-title" data-aos="fade-up">
        Certificados &amp; Formación
      </h1>

      {/* Cursos */}
      <h2 className="subsection-title" data-aos="fade-up">
        Cursos
      </h2>

      <div className="cert-grid" data-aos="fade-up">
        {certificatesCourses.map((item, index) => (
          <button
            key={index}
            type="button"
            className="cert-card"
            onClick={() => setSelectedImage(item.img)}
          >
            <img src={item.img} alt="Certificado" />
          </button>
        ))}
      </div>

      {/* Carreras */}
      <h2 className="subsection-title" data-aos="fade-up">
        Carreras
      </h2>

      <div className="cert-grid careers" data-aos="fade-up">
        {certificatesCareers.map((item, index) => (
          <button
            key={index}
            type="button"
            className="cert-card large"
            onClick={() => setSelectedImage(item.img)}
          >
            <img src={item.img} alt="Certificado" />
          </button>
        ))}
      </div>

      {/* Botón de scroll */}
      <div className="scroll-buttons-certificates">
        <a href="#contacto" className="scroll-button">
          <FaArrowDown className="arrow-icon" />
        </a>
      </div>

      {/* Modal sin título */}
      {selectedImage && (
        <div className="cert-modal" onClick={() => setSelectedImage(null)}>
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt="Certificado ampliado" />
            <button
              type="button"
              className="close-modal"
              onClick={() => setSelectedImage(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
