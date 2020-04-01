import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es";

const sequence = [
  {
    targets: ".root-content-subtitle .letter",
    opacity: [0, 1],
    translateX: [10, 0],
    rotate: [10, 0],
    translateY: [-10, 0],
    scale: [0, 1],
    duration: 100,
    delay: anime.stagger(50, { from: "center"}),
    timelineOffset: 9500
  },
  {
    targets: ".root-content-subtitle",
    translateX: [176, 0],
    translateY: [10, 0],
    scale: [1.25, 1],
    duration: 1000,
    timelineOffset: 12000
  }
];


export default function Subtitle(){
  useEffect( () => {
    const tl = anime.timeline({
      easing: "easeOutQuad"
    });

    const rem = document.querySelector(".root-content").offsetWidth / 22;
    if(window.innerWidth < rem * 48){
      sequence[sequence.length - 1].translateX = undefined;
      sequence[sequence.length - 1].translateY = [20,0];
    }

    sequence.forEach( item => {
      tl.add( item, item.timelineOffset );
    });
  });

  return (
    <h1 className="root-content-subtitle">
      <span className="letter">W</span>
      <span className="letter">e</span>
      <span className="letter">b</span>
      <span className="letter">&nbsp;</span>
      <span className="letter">D</span>
      <span className="letter">e</span>
      <span className="letter">v</span>
      <span className="letter">e</span>
      <span className="letter">l</span>
      <span className="letter">o</span>
      <span className="letter">p</span>
      <span className="letter">e</span>
      <span className="letter">r</span>
    </h1>
  )
}
