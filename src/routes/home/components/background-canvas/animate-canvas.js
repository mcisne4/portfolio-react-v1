import { useEffect } from "react";

// === Canvas Element ===
let canvasElement;
let context;

// === Canvas Temp Settings ===
let requestID;

// === Particle Settings ===
let settings = {
  particleCount: 10,
  particleLife: 2000,
  particleLifeSpacing: 200,
  particleOpacityFade: 200,
  particleOpacitySpeed: 1,
  radiusBase: 5,
  radiusVariation: 5,
  containerX: 360,
  containerY: 154,
  colors: [
    "#000",
    "#F00",
    "#0F0",
    "#00F",
    "#FF0",
    "#0FF",
    "#F0F",
    "#FFF"
  ]
};

// === Particle Arrays ===
let particles = {
  radius: [],
  x: [],
  y: [],
  color: [],
  life: [],
  opacity: [],
};

// === PARTICLE CONSTRUCTOR ===
function createParticle(){
  particles.radius.push(settings.radiusBase + Math.round(Math.random() * settings.radiusVariation));
  particles.x.push(Math.round(Math.random() * window.innerWidth));
  particles.y.push(Math.round(Math.random() * window.innerHeight));
  particles.color.push(Math.round((settings.colors.length - 1) * Math.random()));
  particles.life.push(settings.particleLife);
  particles.opacity.push(0);
}


// === INITIAL PARTICLES ===
function createInitialParticles(){
  particles = {
    radius: [],
    x: [],
    y: [],
    color: [],
    life: [],
    opacity: []
  };
  createParticle();
  particles.life[0] = 0;
  while(particles.life[particles.life.length - 1] < settings.particleLife){
    createParticle();
    particles.life[particles.life.length - 1] = particles.life[particles.life.length - 2] + settings.particleLifeSpacing;
  }
}

// initialize();
// createInitialParticles();
// console.log(particles);

function initialize(){
  // requestID = undefined;
  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;
  createInitialParticles();
}

function drawParticles(context){
  // 
}

// === RESET ===

// === START ===
/*
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
*/
// === Create Particle ===


export function AnimateCanvas(ref){
  useEffect( () => {
    canvasElement = ref.current;
    // eslint-disable-next-line
    context = canvasElement.getContext("2d");

    initialize();

    // start();
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