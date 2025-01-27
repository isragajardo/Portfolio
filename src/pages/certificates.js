import React, { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";
import "../styles/certificates.css";
import desarrolloWeb from "../img/desarrollo-web.png";
import js from "../img/javaScript.png";
import reactJs from "../img/react.png";
import frontEnd from "../img/desarrollo-frontend.png";
import losLeones from "../img/los-leones.jpg"

function Certificates() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="certificates" id="certificados">
      <div className="grid-container">
        <div
          className="tittle-certificates"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1>Cursos</h1>
        </div>
        <div
          className="tittle-certificates"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h1>Carreras</h1>
        </div>
        <div
          className="tittle-certificates-hidden"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h1>Cursos y Carreras</h1>
        </div>

        <div
          id="carouselOne"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselOne"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselOne"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselOne"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={js} className="d-block w-100" alt="Curso 1" />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={desarrolloWeb} className="d-block w-100" alt="Curso 2" />
            </div>
            <div className="carousel-item">
              <img src={reactJs} className="d-block w-100" alt="Curso 3" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselOne"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselOne"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div
          id="carouselTwo"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselTwo"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselTwo"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselTwo"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={losLeones} className="d-block w-100" alt="Carrera 1" />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={frontEnd} className="d-block w-100" alt="Carrera 2" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselTwo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselTwo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="scroll-buttons-certificates">
        <div >
                    <a href="#contacto" className="scroll-button">
                      <FaArrowDown className="arrow-icon" />
                   </a>
              </div>
      </div>
    </div>
  );
}

export default Certificates;

