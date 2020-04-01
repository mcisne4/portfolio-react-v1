import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es";

const sequence = [
  {
    targets: ".root-content-message",
    opacity: [0, 1],
    duration: 2000,
    timelineOffset: 14000
  }
];

export default function Logo(){
  useEffect( () => {
    const tl = anime.timeline({
      easing: "easeOutQuad"
    });
    sequence.forEach( item => {
      tl.add( item, item.timelineOffset );
    });
  });

  return (
    <div className="root-content-message">
      <p>Blending together creativity and functionality to create unique experiences</p>
    </div>
  )
}
