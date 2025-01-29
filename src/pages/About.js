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
                    Soy un apasionado de la programacion, con capacidad para resolver problemas de
                    manera ágil y una mentalidad de aprendizaje continuo. Me adapto fácilmente a
                    cambios y nuevas tecnologías. Además, destaco por mi habilidad para el trabajo en
                    equipo y la gestión autónoma de tareas
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


