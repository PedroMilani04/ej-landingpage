import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import ejlogo from '../img/ejlogo-black.png'; 
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            {/* <img src={ejlogo}alt="Logo da empresa" className="footer-logo" /> */}
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <h3>Links úteis</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12">
            <h3>Contato</h3>
            <p>Rua Nome da Rua, 123 - Bairro, Cidade - Estado</p>
            <p>Email: contato@exemplo.com</p>
            <p>Telefone: (11) 1234-5678</p>
            <ul className="social-icons">
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
          </div>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
