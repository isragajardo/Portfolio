import React, { useEffect } from "react";
import "../styles/about.css";
import Isra from "../img/isra.png";
import { FaArrowDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
        });
    }, []);

    return (
        <section className="about" id="sobremi">
            <div className="about-wrapper">
                
                {/* FOTO */}
                <div className="about-img-container" data-aos="zoom-in">
                    <img src={Isra} alt="Israel Gajardo" className="about-img" />
                </div>

                {/* TEXTO */}
                <div className="about-text" data-aos="fade-left" data-aos-delay="200">
                    <h1 className="about-title">Sobre mí</h1>

                    <p className="about-description">
                        Soy <strong>Full-Stack Senior Developer & Technical Lead</strong> con experiencia en 
                        integraciones empresariales, automatización de procesos y desarrollo de soluciones 
                        completas utilizando React, Node.js, Express, MongoDB y SAP Business One.
                    </p>

                    <p className="about-description">
                        Me destaco por mi capacidad para liderar proyectos técnicos, crear microservicios, 
                        optimizar flujos críticos y conectar ecosistemas complejos 
                        (<strong>Magento, Salesforce, SAP, WordPress, Google Cloud</strong>).
                    </p>

                    <p className="about-description">
                        Me considero una persona adaptable, orientada a la resolución de problemas y con 
                        aprendizaje continuo. En mis tiempos libres disfruto el deporte, viajar, acampar y 
                        explorar nuevas tecnologías.
                    </p>
                </div>
            </div>

            {/* BOTÓN SCROLL */}
            <div className="scroll-down" data-aos="fade-up" data-aos-delay="300">
                <a href="#experiencia" className="scroll-button">
                    <FaArrowDown className="arrow-icon" />
                </a>
            </div>
        </section>
    );
}

export default About;
