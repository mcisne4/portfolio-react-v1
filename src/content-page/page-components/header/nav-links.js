import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks(props){
  console.log(props);
  return (
    <nav className="nav-links">
      <NavLink className="nav-links-link" activeClassName="nav-links-link-active" to="/home">Home</NavLink>
      <NavLink className="nav-links-link" activeClassName="nav-links-link-active" to="/projects">Projects</NavLink>
      <NavLink className="nav-links-link" activeClassName="nav-links-link-active" to="/snippets">Code Snippets</NavLink>
      <NavLink className="nav-links-link" activeClassName="nav-links-link-active" to="/about">About</NavLink>
      <NavLink className="nav-links-link" activeClassName="nav-links-link-active" to="/contact">Contact</NavLink>
    </nav>
  );
};