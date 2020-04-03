import React from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";
import NavLogo from "./nav-logo";
import NavButton from "./nav-button";


export default function Navbar(){
  return (
    <nav className="nav">
      <div className="nav-container">
        <NavLogo />

        <NavButton />

        <div className="nav-links">
          <div className="nav-links-item">
            <Link className="nav-links-link" to="/home">Home</Link>
            <hr></hr>
          </div>
          <div className="nav-links-item">
            <Link className="nav-links-link" to="/projects">Projects</Link>
            <hr></hr>
          </div>
          <div className="nav-links-item">
            <Link className="nav-links-link" to="/snippets">Code Snippets</Link>
            <hr></hr>
          </div>
          <div className="nav-links-item">
            <Link className="nav-links-link" to="/about">About</Link>
            <hr></hr>
          </div>
          <div className="nav-links-item">
            <Link className="nav-links-link" to="/contact">Contact</Link>
            <hr></hr>
          </div>
        </div>
      </div>
    </nav>
  );
};