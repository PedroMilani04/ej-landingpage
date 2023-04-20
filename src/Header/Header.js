import {} from './Header.css';
import React, {useState} from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  return (
    <header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Propósito</a>
				<a href="/#">Info</a>
				<a href="/#">Métodos</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
  );
}

export default Header;