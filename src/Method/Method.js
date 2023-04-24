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
              <h3>1. Estruturação</h3>
              <h4>Como quer seu projeto?</h4>
              <p>Na primeira parte do processo, levantamos a estrutura e requisitos do projeto em questão. Após isso, a fase de montagem e criação do projeto é iniciada.</p>
            </section>
            <section
              className="card"
              data-aos="flip-left"
              data-aos-duration="1150"
            >
              <h3>2. Montagem</h3>
              <h4>Mão na massa!</h4>
              <p>
                Durante essa fase do processo, seu projeto é montado e devidamente testado, sempre informado do andamento e podendo requisitar novos serviços e funcionalidades.
              </p>
            </section>
            <section
              className="card"
              data-aos="flip-left"
              data-aos-duration="1150"
            >
              <h3>3. Entrega</h3>
              <h4>A finalização.</h4>
              <p>
                Por fim, seu projeto é entregue totalmente funcional, testado e 100% pronto para uso, contando com suporte da EJCOMP para quaisquer eventualidades. <br></br>Faça bom proveito!
              </p>
            </section>
          </div>
          <div>
            <button className="button-74">Contato</button>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Method;
