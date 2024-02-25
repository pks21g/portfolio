import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: "1100px" });
  const [showNav, setShowNav] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);

  const toggleNavItems = () => {
    setShowNav(!showNav);
  };

  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <nav className="navbar">
      <div className="navcontainer container">
        <div className="logo">
          <h1>PKS</h1>
        </div>
        <div className={`nav-elements ${showNavBar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setShowNavBar(false)}>
                Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/link">Link</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>

        <div className="hamburger" onClick={handleShowNavBar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
