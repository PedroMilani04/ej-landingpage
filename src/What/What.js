import './What.css'
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function What() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="what" id="proppage">
      <h1 className="what__title" data-aos="fade-down">
        Não deixe seu negócio ficar para trás
      </h1>
      <h2 className="what__subtitle" data-aos="zoom-in">
        Quem somos nós?
      </h2>
      <p data-aos="fade-up" data-aos-duration="1050">
        A EJCOMP é uma empresa de desenvolvimento web que se dedica a criar soluções digitais personalizadas para seus clientes, feita e desenvolvida por alunos do curso de Ciências da Computação da FCT UNESP. Nós nos concentramos em entender as necessidades únicas de cada negócio e, em seguida, trabalhamos em colaboração com nossos clientes para criar um website ou aplicativo que atenda às suas necessidades específicas.
      </p>
      <p data-aos="fade-up" data-aos-duration="1050">
        Se você está procurando uma equipe de desenvolvimento web atualizada e comprometida a ajudar seu negócio a ter sucesso, esse é seu lugar. Estamos ansiosos para trabalhar com você para criar soluções digitais personalizadas que atendam às suas necessidades específicas.
      </p>
      <button className="button-74">Contato</button>
    </div>
  );
}

export default What;    