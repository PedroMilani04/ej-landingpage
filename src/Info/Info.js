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
          um dolote velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet,
          consectetur
        </p>
        <p data-aos="zoom-out">
          um doloolore mollit anim id est laborum." "Lorem ipsum dolor sit amet,
          consectetur
        </p>
        <ul data-aos="fade-right">
          <li>Best prices in the region</li>
          <li>Best prices in the region</li>
          <li>Best prices in the region</li>
        </ul>
      </div>
    </div>
  );
}

export default Info;