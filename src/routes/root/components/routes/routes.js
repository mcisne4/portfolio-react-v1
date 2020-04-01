import React, { useEffect } from "react";
import {
  Link
} from "react-router-dom";
import anime from "animejs/lib/anime.es";

const sequence = [
  {
    targets: ".root-routes",
    opacity: [0, 1],
    duration: 2000,
    timelineOffset: 14000
  }
];


export default function Routes(){
  useEffect( () => {
    const tl = anime.timeline({
      easing: "easeOutQuad"
    });
    sequence.forEach( item => {
      tl.add( item, item.timelineOffset );
    });
  });

  const actionless = (e) => {
    e.preventDefault();
    return false;
  }

  return (
  <div className="root-routes">
    <Link className="root-routes-link" onClick={actionless}>Projects</Link>
    <Link className="root-routes-link" onClick={actionless}>Code Snippets</Link>
    <Link className="root-routes-link" onClick={actionless}>About Me</Link>
    <Link className="root-routes-link" onClick={actionless}>Contact</Link>
  </div>
)
}
