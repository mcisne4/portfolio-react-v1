import React from "react";

export default function NavButton(){
  return (
    <svg viewBox="0 0 44 32" className="nav-btn">
      <rect className="nav-btn-border" x="2" y="2" rx="6" ry="6" width="38" height="28" />
      <line className="nav-btn-line" x1="10" x2="32" y1="9" y2="9" />
      <line className="nav-btn-line" x1="10" x2="32" y1="16" y2="16" />
      <line className="nav-btn-line" x1="10" x2="32" y1="23" y2="23" />
    </svg>
  );
}