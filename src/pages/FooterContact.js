import React from "react";
import "../styles/footerContact.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function FooterContact() {
  return (
    <footer className="footer-contact" id="contacto">
      <div className="footer-container">

        {/* INFO CARD */}
        <div className="footer-card">
          <h3>Contáctame</h3>
          <p>Email: igajardojimenez@gmail.com</p>
          <p>Teléfono: +(56) 9 9060 3728</p>
          <p>Dirección: Baquedano 01100, Santiago, Chile</p>

          <h5 className="repo-title">Código fuente de esta web</h5>
          <a
            className="repo-icon"
            href="https://github.com/isragajardo/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        {/* SOCIAL MEDIA + WHATSAPP */}
        <div className="footer-card">
          <h3>Sígueme</h3>

          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/israel-gajardo-66357716b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/isragaj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/isragajardo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/56990603728"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn neon"
          >
            💬 Escríbeme por WhatsApp.
          </a>
        </div>

      </div>
    </footer>
  );
}

export default FooterContact;
