import { } from './Info.css';
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Info() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="info" id="infopage">
      <img
        className="unespimg"
        src="https://s2.glbimg.com/G3oHthkpW6iBumdW0c62Ar7Im98=/0x0:620x465/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2014/04/03/unesp.jpg"
        alt="Logo da Unesp"
      />
      <div className="contentinfo">
        <img
          className="unespimg1"
          src="https://s2.glbimg.com/G3oHthkpW6iBumdW0c62Ar7Im98=/0x0:620x465/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2014/04/03/unesp.jpg"
          alt="Logo da Unesp"
        />

        <h1 data-aos="fade-right">Sobre a FCT - UNESP</h1>
        <h2 data-aos="fade-right" data-aos-duration="1200">
          Por quê depositar sua confiança?
        </h2>
        <p data-aos="zoom-out">


          
        </p>
        <p data-aos="zoom-out">
          A FCT-UNESP é uma das melhores faculdades de Ciências da Computação do Brasil, com uma equipe de professores altamente qualificados e com experiência em pesquisa e desenvolvimento de software. 

        </p>
        <p>Nesse âmbito, alunos do curso organizam a EJCOMP, uma empresa sem fins lucrativos que presta serviços de desenvolvimento de software para empresas e organizações da região cobrando o preço abaixo do padrão do mercado, com o objetivo de proporcionar aos alunos uma experiência prática de mercado, além de contribuir para o desenvolvimento econômico da região.</p>
        <ul data-aos="fade-right">
          <li>Melhores preços da região</li>
          <li>Equipe moderna e atualizada</li>
          <li>+10 anos de história</li>
        </ul>
      </div>
    </div>
  );
}

export default Info;