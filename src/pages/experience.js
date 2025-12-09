import React, { useEffect } from "react";
import "../styles/experience.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowDown } from "react-icons/fa";

function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  const experiences = [
    {
      role: "Application Developer",
      company: "ClinicalMarket / Profar",
      dates: "Mar 2025 – Actualidad",
      items: [
        "Desarrollo del consultor de precios online (React + Node + SAP + MongoDB).",
        "Integraciones SAP Business One ↔ Magento ↔ WordPress.",
        "Microservicios para sincronización de catálogo, precios y stock.",
        "Automatización de órdenes desde correo (Node.js + SAP SL).",
        "Monitoreo avanzado con Datadog (logs + dashboards + alertas).",
        "Sistema interno de agendamiento con Google Calendar.",
        "API REST SAP ↔ Salesforce (clientes, contactos, direcciones, artículos)."
      ]
    },
    {
      role: "Software Engineer",
      company: "Orbecorp",
      dates: "Ene 2025 – Mar 2025",
      items: [
        "Desarrollo frontend responsivo con HTML, CSS, JavaScript y React.",
        "APIs REST con Node.js, Express y MongoDB.",
        "Optimización UI/UX orientada a conversiones.",
        "Consumo e integración de APIs externas.",
        "Pruebas y documentación en Postman."
      ]
    },
    {
      role: "Product Operations Engineer",
      company: "ComparaOnline",
      dates: "2023 – 2024",
      items: [
        "Corrección y optimización de sitios responsivos (HTML, CSS, JS, JSON).",
        "Implementación de mejoras UI/UX.",
        "Gestión de requerimientos e incidencias técnicas.",
        "Uso de Firebase, Postman y herramientas internas."
      ]
    },
    {
      role: "Product Operations Analyst",
      company: "ComparaOnline",
      dates: "Dic 2021 – Nov 2023",
      items: [
        "Administración ERP Oracle Netsuite.",
        "Integraciones vía API con CRM HubSpot.",
        "QA funcional en procesos internos.",
        "Optimización de flujos operativos."
      ]
    },
    {
      role: "HelpDesk Assistant / Analyst",
      company: "ComparaOnline",
      dates: "2018 – 2021",
      items: [
        "Administración GSuite, Softland y CRM Bitrix.",
        "Implementación de flujos en Zendesk y Jira.",
        "Manejo de inventario y logística TI.",
        "Soporte técnico hardware y software."
      ]
    },
    {
      role: "Experiencias Propias / Freelance",
      company: "HazteOnline & Proyectos Web",
      dates: "2016 – Actualidad",
      items: [
        'Creador de HazteOnline.com.',
        "Desarrollo WordPress: plugins, temas, optimización.",
        "Tiendas Shopify y WooCommerce.",
        "Integración de pasarelas de pago (PayPal, Stripe, Webpay).",
        "Administración de tiendas en Jumpseller (joyasbaron.cl).",
        "Desarrollo de mi portfolio isracode.com."
      ]
    }
  ];

  return (
    <section className="experience" id="experiencia">
      <h1 className="experience-title" data-aos="fade-up">
        Experiencia Profesional
      </h1>

      <div className="timeline">
        <div className="timeline-line"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="timeline-card glass-card">
              <h2 className="role">{exp.role}</h2>
              <p className="company">{exp.company}</p>
              <p className="dates">{exp.dates}</p>

              <ul>
                {exp.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="scroll-buttons">
        <a href="#certificados" className="scroll-button">
          <FaArrowDown className="arrow-icon" />
        </a>
      </div>
    </section>
  );
}

export default Experience;
