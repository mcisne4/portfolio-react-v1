import { useEffect } from "react";

// === Canvas Element ===
let canvasElement;

// === Canvas Sizing ===
let canvas = {};

// === Particle Settings ===
let settings = {
  particleCount: 2,
  radiusMin: 5,
  radiusMax: 10,
  contentX: 360,
  contentY: 154,
  fillColors: [
    "#0ff"
  ]
};


// === Particle Arrays ===
let particles = {
  x: [],
  y: [],
  angle: [],
  distance: [],
  opacity: []
};

// === RESET ===
function reset(){
  settings.distanceStart = 0;
  settings.distanceFade = 0;
  canvas = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    xx: 0,
    yy: 0
  };
  particles = {
    x: [],
    y: [],
    angle: [],
    distance: [],
    opacity: []
  };
    // window.removeEventListener()
}

// === START ===
function start(){
  canvas.x2 = window.innerWidth;
  canvas.y2 = window.innerHeight;
  canvas.xx = canvas.x2 / 2;
  canvas.yy = canvas.y2 / 2;

  canvasElement.width = canvas.x2;
  canvasElement.height = canvas.y2;

  settings.distanceStart = Math.ceil(Math.sqrt(Math.pow(canvas.xx, 2) + Math.pow(canvas.yy, 2)));

  console.log(settings.distanceStart);
}

// === Create Particle ===


export function AnimateCanvas(ref){
  useEffect( () => {
    canvasElement = ref.current;
    let context = canvasElement.getContext("2d");

    start();
    /*
    let requestID;
    let y = 50;
    let speed = 1;

    function resize(){
      window.removeEventListener("resize", resize);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    }
    
    function render(){
      window.addEventListener("resize", resize);
      context.filter = "blur(4px) brightness(50%)";
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.beginPath();
      context.arc(50, y, 50, 0, 2 * Math.PI);
      context.globalAlpha = 0.5;
      context.fillStyle = fillColors[2];
      context.fill();

      if(y > window.innerHeight - 50 || y < 50){
        speed = -speed;
      }
      y += speed;
      requestID = requestAnimationFrame(render);
    }


    resize();

    return () => {
      window.removeEventListener("resize");
      cancelAnimationFrame(requestID);
    }
    */
  });
}