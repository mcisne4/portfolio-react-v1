import { useEffect } from "react";

export function AnimateCanvas(ref){
  useEffect( () => {
    let canvas = ref.current;
    let context = canvas.getContext("2d");
    let requestID;
    let y = 50;
    let speed = 1;
    let yDirection = 1;
    
    function render(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      context.beginPath();
      context.arc(50, y, 50, 0, 2 * Math.PI);
      context.fill();

      if(y > window.innerHeight - 50 || y < 50){
        speed = -speed;
      }
      y += speed;
      requestID = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(requestID);
    }
  });
}