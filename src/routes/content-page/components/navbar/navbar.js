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
          <Link className="nav-links-link" to="/home">Home</Link>
          <Link className="nav-links-link" to="/projects">Projects</Link>
          <Link className="nav-links-link" to="/snippets">Code Snippets</Link>
          <Link className="nav-links-link" to="/about">About</Link>
          <Link className="nav-links-link" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};