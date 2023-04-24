import {} from "./Header.css";
import React, { useState } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="headerej">
      <BrowserRouter>
        <h1>EJCOMP</h1>
        <nav ref={navRef}>
          <Link to="#homepage" smooth className="linkhov">
            Home
          </Link>
          <Link to="#proppage" smooth className="linkhov">
            Propósito
          </Link>
          <Link to="#infopage" smooth className="linkhov">
            Info
          </Link>
          <Link to="#methodpage" smooth className="linkhov">
            Métodos
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </BrowserRouter>
    </header>
  );
}

export default Header;
