import React from 'react';
import '../styles/footerContact.css'; 
import emailjs from '@emailjs/browser';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function FooterContact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4nz2aqv', 'template_7tukxdm', e.target, 'kRFVwDO4ouOZSsLep')
            .then(() => {
                alert('Mensaje enviado con éxito.');
            })
            .catch((error) => {
                console.error('Error al enviar el correo:', error);
                alert('Error al enviar el mensaje.');
            });
    };
    return (
        <footer className="footer-contact" id='contacto'>
            <div className="footer-container">
                <div className="contact-info">
                    <h3>Contáctame</h3>
                    <p>Email: igajardojimenez@gmail.com</p>
                    <p>Teléfono: +(56) 9 9060 3728</p>
                    <p>Dirección: Baquedano 01100, Santiago, Chile</p>
                    <h5>Aqui puedes ver el desarrollo de esta pagina WEB</h5>
                    <a className='icon-git'  href="https://github.com/isragajardo/Portfolio/" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    
                </div>
                <div className="contact-form">
                    <h3>Envíame un correo</h3>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Nombre" 
                            required 
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Correo electrónico" 
                            required 
                        />
                        <textarea 
                            name="message" 
                            placeholder="Escribe tu mensaje aquí..." 
                            rows="4" 
                            required
                        ></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
                <div className="social-media">
                    <h3>Sígueme</h3>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/israel-gajardo-66357716b/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/isragaj/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://github.com/isragajardo" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterContact;


