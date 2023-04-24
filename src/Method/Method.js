import {} from "./Method.css";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
function Method() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <div className="method" id="methodpage">
        <div className="method-content">
          <h1 data-aos="fade-down">Nosso método de trabalho</h1>
          <h2 data-aos="fade-up" data-aos-duration="1350">
            Abrindo as portas da tecnologia. De uma a uma.
          </h2>
          <div className="cards">
            <section
              className="card"
              data-aos="flip-left"
              data-aos-duration="1150"
            >
              <h3>1. Aprenda</h3>
              <h4>Lorem ipsuim do lipsuim doloar ameoroem ipsum</h4>
              <p>Lorem ipsuim doloar amet amt dolror loroem ipsum</p>
            </section>
            <section
              className="card"
              data-aos="flip-left"
              data-aos-duration="1150"
            >
              <h3>1. Aprenda</h3>
              <h4>Lorem ipsuim do loroem ipsum</h4>
              <p>
                Lorem ipsuim doloar ipsuim doloar ameipsuim doloar ameamet amt
                dolror loroem ipsum
              </p>
            </section>
            <section
              className="card"
              data-aos="flip-left"
              data-aos-duration="1150"
            >
              <h3>1. Aprenda</h3>
              <h4>Lorem ipsuim do loroem ipsum</h4>
              <p>
                Lorem ipsuim doloar amipsuipsuim doloar ameipsuim doloar ameim
                doloar ameet amt dolror loroem ipsum
              </p>
            </section>
          </div>
          <div>
            <button className="button-74">Contact us</button>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Method;
