import Header from "../Header/Header";
import { } from "./Page.css";
import EJBRANCO from '../img/EJBRANCO.png'
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Page() {
  return (
    <div className="pagecontainer" id="homepage">
      <Header />
      <div className="pagebody">
        <div className="hero">
          <div className="hero-content">
            <div
              className="hero-text"
              data-aos="fade-down"
              data-aos-duration="1200"
            >
              Descubra o <span>potencial</span> do seu negócio com os{" "}
              <span>serviços</span> da <span>EJCOMP</span>.
            </div>

            <div className="hero-image2" data-aos="zoom-in">
              <img className="ejbrancoimg" src={EJBRANCO} alt="hero" />
            </div>
            <button className="button-74">Contato</button>
          </div>
          <div className="hero-image" data-aos="zoom-in">
            <img className="ejbrancoimg" src={EJBRANCO} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Page;