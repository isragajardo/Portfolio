import React, { useEffect } from "react";
import "../styles/experience.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowDown } from "react-icons/fa";
 
function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="experience" id="experiencia">
      <div className="experience-content">
        <div
          className="experience-1"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h2 className="tittle">HelpDesk Assistant, ComparaOnline 2018-2019</h2>
          <h2 className="tittle">HelpDesk Analyst, 2019-2021</h2>
          <p>- Administración Gsuite</p>
          <p>- Administración ERP Softland</p>
          <p>- Sistema de ticket con Jira</p>
          <p>- Implementación y administración de flujos de tickets en CRM Zendesk</p>
          <p>- Administración CRM Bitrix</p>
          <p>- Manejo de logística y administración de inventario</p>
          <p>- Resolución de incidencias de hardware y software</p>
          <p>- Capacidad para trabajar en equipo y bajo presión</p>
        </div>

        <div
          className="experience-2"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h2 className="tittle">Product Operations Analyst, ComparaOnline 2021-2023</h2>
          <p>- Administración de ERP Oracle Netsuite</p>
          <p>- Implementación y administración de flujos de tickets en CRM Hubspot</p>
          <p>- Identificación y resolución de errores en pruebas de software</p>
          <p>- Trabajo en equipo multidisciplinario para implementar soluciones</p>
        </div>
        <div
          className="experience-1"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h2 className="tittle">Product Operations Engineer, ComparaOnline 2023-2024</h2>
          <p>- Resolución de sitios web responsivos con HTML, CSS, JavaScript y JSON</p>
          <p>- Uso de FireBase, Postman</p>
          <p>- Colaboración en mejoras de diseño UI/UX</p>
          <p>- Gestión de requerimientos e incidencias en software</p>
          <p>- Optimización de procesos para aumentar productividad</p>
        </div>

        <div
          className="experience-2"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h2 className="tittle">Experiencias propias</h2>
          <p>- Aministracion y edicion de sitios web en Wordpress https://www.negawatt.cl/</p>
          <p>- Implementacion y edicion de plugins</p>
          <p>- Creacion de tiendas shopify dropshoping</p>
          <p>- Configuración y personalización de tiendas en WooCommerce</p>
          <p>- Integración de pasarelas de pago (PayPal, Stripe, entre otras).</p>
          <p>- Administracion y edicion de sitio en JumpSeller https://tiendaonline.joyasbaron.cl/</p>
          
        </div>
      </div>

      <div className="scroll-buttons">
        <div >
                <a href="#certificados" className="scroll-button">
                  <FaArrowDown className="arrow-icon" />
                </a>
              </div>
      </div>
    </div>
  );
}

export default Experience;
