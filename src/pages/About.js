import React, { useEffect } from "react";
import "../styles/about.css";
import Isra from "../img/isra.png";
import IsraResponsive from "../img/isra-responsive.png";
import { FaArrowDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="about" id="sobremí">
            <div className="about-me" data-aos="fade-up">
                <div className="about-me-img" data-aos="zoom-in">
                    <img className="jello-vertical isra isra-up" src={Isra} alt="Israel Gajardo" />
                    <img className="jello-vertical isra isra-down" src={IsraResponsive} alt="Israel Gajardo" />
                </div>
                <div className="text-about-me" data-aos="fade-left" data-aos-delay="200">
                    <h1 className="tittle-about">Israel Gajardo</h1>
                    <p>
                    Soy una persona analítica, creativa y con facilidad para resolver problemas. Tengo una mentalidad de aprendizaje continuo, me adapto rápidamente a cambios y tecnologías, y combino mis habilidades técnicas con una excelente capacidad para trabajar en equipo y gestionar tareas de manera autónoma.

Cuento con experiencia en desarrollo web HTML, CSS, JavaScript, React. tambien administración de CRMs como Zendesk, Hubspot y Bitrix, gestión de ERPs como Oracle Netsuite y Softland, así como en la optimización de procesos y resolución de incidencias. También tengo conocimientos en plataformas como WordPress, Shopify y JumpSeller, gestionando tiendas online, integrando pasarelas de pago y personalizando experiencias de usuario.

Además de mis competencias profesionales, disfruto de actividades como el fútbol, viajar y acampar, las cuales me mantienen activo y motivado para enfrentar nuevos desafíos.
                    </p>
                    <p>
                        En mis tiempos libres me gusta hacer deporte, juego mucho futbol, tambien viajar y acampar
                    </p>
                </div>
            </div>
            <div className="scroll-down" data-aos="fade-up" data-aos-delay="400">
                <a href="#experiencia" className="scroll-button">
                    <FaArrowDown className="arrow-icon" />
                </a>
            </div>
        </div>
    );
}

export default About;


