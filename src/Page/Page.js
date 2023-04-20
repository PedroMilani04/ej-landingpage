import React from "react";
import Header from "../Header/Header";
import { } from "./Page.css";
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
            <img src="https://images.unsplash.com/photo-1519680772-3b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="hero" />
          </div>
            <button className="button-74">Contact us</button>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1519680772-3b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="hero" />
          </div>
        </div>
      </div>
    </div >
  );
}


export default Page;