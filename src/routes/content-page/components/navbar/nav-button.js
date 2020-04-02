import React from "react";

export default function NavButton(){
  return (
    <button className="nav-btn">
      <svg viewBox="0 0 24 24" className="nav-btn-lines" preserveAspectRatio="none">
        <line className="nav-btn-line" x1="2" x2="22" y1="2" y2="2" />
        <line className="nav-btn-line" x1="2" x2="22" y1="12" y2="12" />
        <line className="nav-btn-line" x1="2" x2="22" y1="22" y2="22" />
      </svg>
    </button>
  );
}