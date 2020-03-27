import { useEffect } from "react";

// === Particle Settings ===
let settings = {
  particleCount: 10,
  particleLife: 2000,
  particleLifeSpacing: 200,
  particleOpacityFade: 200,
  particleOpacitySpeed: 1,
  particleFilters: "blur(2px)",
  radiusBase: 5,
  radiusVariation: 5,
  containerX: 360,
  containerY: 154,
  opacityMax: 0.5,
  colors: [
    "#aaff00",
    "#05ff00",
  ]
};

// === PARTICLE CONSTRUCTOR ===
function createParticle(){
  return {
    radius: settings.radiusBase + Math.round(Math.random() * settings.radiusVariation),
    x: Math.round(Math.random() * window.innerWidth),
    y: Math.round(Math.random() * window.innerHeight),
    color: settings.colors[Math.round((settings.colors.length - 1) * Math.random())],
    life: settings.particleLife,
    opacity: 0
  }
}

// === INITIAL PARTICLES ===
function createInitialParticles(){
  let particles = [];
  particles.push(createParticle());
  particles[0].life = 0;
  while(particles[particles.length - 1].life < settings.particleLife){
    particles.push(createParticle());
    particles[particles.length - 1].life = particles[particles.length - 2].life + settings.particleLifeSpacing;
  }
  return particles;
}

// === INITIALIZE ===
function initialize(canvas, requestID){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const context = canvas.getContext("2d");

  let particles = createInitialParticles();
  particles = updateParticles(particles);
  drawParticles(context, particles);
  animateParticles(context, particles);
}

function drawParticles(context, particles){
  context.save();
  // context.shadowBlur = 10;
  context.filter = settings.particleFilters;
  particles.forEach( particle => {
    context.beginPath();
    context.globalAlpha = particle.opacity;
    context.shadowColor = particle.color;
    context.fillStyle = particle.color;
    context.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
    context.fill();
  });
  context.restore();
}

function updateParticles(particles){
  // console.log(particles[0].life);
  if(particles[0].life < 0){
    particles.shift();
    particles.push(createParticle());
  }
  for(let i=0; i<particles.length; i++){
    // -- Opacity --
    if(particles[i].life > settings.particleOpacityFade){
      particles[i].opacity += settings.particleOpacitySpeed;
    } else {
      particles[i].opacity -= settings.particleOpacitySpeed;
      if(particles[i].opacity < 0){
        particles[i].opacity = 0;
      }
    }
  }
  // console.log(particles);
  return particles;
}

function animateParticles(context, particles){
  particles = updateParticles(particles);
  drawParticles(context, particles);
  // requestAnimationFrame(animateParticles(context, particles));
  // console.log("Hello");
}

// ==========================
// ===== ANIMATE CANVAS =====
// ==========================
export function AnimateCanvas(ref){
  const canvas = ref.current;
  let requestID;

  

  useEffect( () => {

    initialize(canvas, requestID);

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