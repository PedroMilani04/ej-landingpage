import React from "react";
import Header from "../Header/Header";
import { } from "./Page.css";
import EJBRANCO from '../img/EJBRANCO.png'
function Page() {
  return (
    <div className="pagecontainer">
      <Header />
      <div className="pagebody">
        <div className="hero">
          <div className="hero-content">
            <div className="hero-text">
              Unlocks the <span>potential</span> of your business with our <span>services</span> and <span>solutions</span>.
            </div>

            <div className="hero-image2">
              <img className="ejbrancoimg" src={EJBRANCO} alt="hero" />
            </div>
            <button className="button-74">Contact us</button>
          </div>
          <div className="hero-image">
            <img className="ejbrancoimg" src={EJBRANCO} alt="hero" />
          </div>
        </div>
      </div>
    </div >
  );
}


export default Page;