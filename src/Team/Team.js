import {} from './Team.css';
import ejlogo from '../img/ejlogo-black.png';
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Team() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="team">
      <h1 data-aos="fade-down">Ainda com dúvidas?</h1>
      <p data-aos="zoom-out">
        Caso ainda tenha alguma dúvida ou incerteza, ou queira apenas saber mais
        sobre como trabalhamos e gerenciamos nossos projetos, nossos contatos
        estão abertos e estamos anciososos para trabalhar juntos!
      </p>

      <p data-aos="zoom-out">
        Nosso trabalho é mudar o seu trabalho, com tecnologia e segurança.
      </p>
      <img className="ejlogob" src={ejlogo} alt="ejlogo" />
      <button className="button-74">Contact us</button>
    </div>
  );
}

export default Team;