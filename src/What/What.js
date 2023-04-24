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
        What is the purpose of this website?
      </h2>
      <p data-aos="fade-up" data-aos-duration="1050">
        "Lorem ipsum dolor sit alore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum."
      </p>
      <p data-aos="fade-up" data-aos-duration="1050">
        "Lorem ipsum dolor sit amet, consectetur a dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <button className="button-74">Contact us</button>
    </div>
  );
}

export default What;    