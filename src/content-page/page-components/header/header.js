import React from "react";

import NavLogo from "./nav-logo";
import NavButton from "./nav-button";
import NavLinks from "./nav-links";

export default function Header(){
  return (
    <header className="nav-header">
      <div className="nav-header-container">
        <NavLogo />
        <NavButton />
        <NavLinks />
      </div>
    </header>
  );
};