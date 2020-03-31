import { useEffect } from "react";
import { pSettings } from "./settings";

// === Particle Settings ===
/*
let settings = {
  particleCount: 100,

  phase1: 200,
  phase2: 600,
  phase3: 200,
  phase4: 100,
  
  amplitude1: 1,
  amplitude2: 2,
  amplitude3: 1,
  
  particleFilters: "blur(2px)",
  particleRadiusBase: 5,
  particleRadiusVariation: 5,
  colors: [
    "#aaff00",
    "#05ff00",
  ],

  containerX: 352,
  containerY: 308,
  containerBreak: 768,
};
*/

// ==========================
// ===== ANIMATE CANVAS =====
// ==========================
export function AnimateCanvas(ref){
  useEffect( () => {
    // --- Canvas Variables ---
    const canvas = ref.current;
    const context = canvas.getContext("2d");
    let contentArea;
    // let requestID;
    // let contentArea = {};
    // let opacityIncrement = settings.particleOpacityMax / settings.particleOpacityAge;
    // const maxAge = settings.phase1 + settings.phase2 + settings.phase3 + settings.phase4;

    // const phase1_ratio = 1 / settings.phase1;
  
    // // --- Canvas Arrays ---
    // let particle_x = [];
    // let particle_y = [];
    // let particle_radius = [];
    // let particle_color = [];
    // let particle_age = [];
    // let particle_opacity = [];
    // let particle_directionX = [];
    // let particle_directionY = [];

    // let dy = [];
    // let dya = [];
  
    // --- Particles Object ---
    // eslint-disable-next-line
    let p;


    // // --- Canvas Functions ---
    // const createInitialParticles = () => {
    //   p = {
    //     x: [],
    //     y: [],
    //     radius: [],
    //     color: [],
    //     opacity: [],
    //     age: [],
    //     // directionX: [],
    //     // directionY: [],
    //     dx: [],
    //   };
    // }
    // const createInitialParticles = () => {
    //   particle_x = [];
    //   particle_y = [];
    //   particle_radius = [];
    //   particle_color = [];
    //   particle_opacity = [];
    //   particle_age = [];
    //   particle_directionX = [];
    //   particle_directionY = [];
    //   dy = [];
    //   dya = [];

    //   for(let i=0; i<settings.particleCount; i++){
    //     particle_x.push(
    //       Math.round(Math.random() * window.innerWidth)
    //     );
    //     particle_y.push(
    //       Math.round(Math.random() * window.innerWidth)
    //     );
    //     particle_radius.push(
    //       settings.particleRadiusBase + Math.round( Math.random() * settings.particleRadiusVariation)
    //     );
    //     particle_color.push(
    //       settings.colors[Math.round((settings.colors.length - 1) * Math.random())]
    //     );
    //     particle_opacity.push(0);
    //     particle_age.push(Math.floor( (maxAge / settings.particleCount) * i));
    //     particle_directionX.push(Math.random() < 0.5 ? -1 : 1);
    //     particle_directionY.push(Math.random() < 0.5 ? -1 : 1);
    //     dy.push(0);
    //     dya.push(-.01);
    //   }
  
    // }
  
    // const drawParticles = () => {
    //   // /*
    //   context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    //   context.save();
    //   // context.filter = settings.particleFilters;
    //   for(let i=0; i<particle_age.length; i++){
    //     context.beginPath();
    //     context.shadowColor = particle_color[i];
    //     context.shadowBlur = 10;
    //     context.globalAlpha = particle_opacity[i];
    //     context.fillStyle = particle_color[i];
    //     context.arc(
    //       particle_x[i],
    //       particle_y[i],
    //       particle_radius[i],
    //       0,
    //       2 * Math.PI
    //     );
    //     context.fill();
    //   }
    //   context.restore();
    //   // */
    // }


    // const updateParticles = () => {
    //   for(let i=0; i<particle_age.length; i++){
    //     // --- Particle Age ---
    //     particle_age[i]++;
    //     if(particle_age[i] > maxAge){
    //       particle_age[i] = 0;
    //       particle_x[i] = Math.round(Math.random() * window.innerWidth);
    //       particle_y[i] = Math.round(Math.random() * window.innerHeight);
    //       particle_radius[i] = settings.particleRadiusBase + Math.round( Math.random() * settings.particleRadiusVariation);
    //       particle_opacity[i] = 0;
    //     }
    //     // --- X ---
    //     particle_x[i] += particle_directionX[i] * (particle_age[i] / maxAge) * .5;
    //     const ss = particle_age[i] / maxAge;
    //     const sucks = particle_directionY[i] * 0.1 * Math.sin(2 * Math.PI * ss);
    //     particle_y[i] += sucks;

    //     // --- Phase 1 ---
    //     if(particle_age[i] <= settings.phase1){
    //       particle_opacity[i] = particle_age[i] * phase1_ratio * 1;
    //       particle_radius[i] += 0.01;
    //     }
    //     else if(particle_age[i] > settings.phase1 && particle_age[i] <= (settings.phase2 + settings.phase1)){
    //     }
    //     else if(particle_age[i] > (settings.phase2 + settings.phase1) && particle_age[i] <= (settings.phase3 + settings.phase2 + settings.phase1)){
    //       particle_opacity[i] = (settings.phase3 + settings.phase2 + settings.phase1 - particle_age[i]) / settings.phase3;
    //     }
    //     else {
    //       particle_radius[i] += 1;
    //     }
    //   }
    // }

    // const _translate = (direction, amplitude, currentAge) => {
    //   let y = direction * amplitude * Math.sin((2 * Math.PI / maxAge) * currentAge + Math.PI / 2);
    //   return Math.round(y);
    // }

    // const animateParticles = () => {
    //   const i = 0;
    //   updateParticles();
    //   drawParticles();
    //   requestID = requestAnimationFrame(animateParticles);
    // }


    const initialize = () => {
      contentArea = setCanvas(canvas);
      // console.log(contentArea);
    //   canvas.width = window.innerWidth;
    //   canvas.height = window.innerHeight;

    //   if(window.innerWidth < settings.containerBreak){
    //     contentArea.x1 = (window.innerWidth - settings.containerX) / 2;
    //     contentArea.x2 = contentArea.x1 + settings.containerX;
    //     contentArea.y1 = (window.innerHeight - (2 * settings.containerY)) / 2;
    //     contentArea.y2 = contentArea.y1 + (2 * settings.containerY);
    //   } else {
    //     contentArea.x1 = (window.innerWidth - (2 * settings.containerX)) / 2;
    //     contentArea.x2 = contentArea.x1 + (2 * settings.containerX);
    //     contentArea.y1 = (window.innerHeight - settings.containerY) / 2;
    //     contentArea.y2 = contentArea.y1 + settings.containerY;
    //   }
  
      p = createInitialParticles(contentArea);
      for(let i=0; i<10; i++){
        p = updateParticles(p);
        console.log(p);
      }
      drawParticles(context, p);
    // console.log(p);

    //   createInitialParticles();
    //   // updateParticles();
    //   // drawParticles();
    //   animateParticles();
    }
  
    // --- Start ---
    initialize();
  });
}

const setCanvas = (canvas) => {
  // --- Set Canvas Size ---
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // --- Get Content Sizing ---
  // ... Create Temporary Element ...
  document.body.insertAdjacentHTML(
    "beforeend",
    "<div id='tempRem'></div>"
  );
  const remElement = document.getElementById("tempRem");
  const containerWidth = remElement.offsetWidth;
  const containerHeight = remElement.offsetHeight;
  remElement.parentNode.removeChild(remElement);
  // ... Calculate Content Size ...
  const breakWidth = Math.round(containerWidth * 48 / 22);
  let contentArea = {};
  if(window.innerWidth <= breakWidth){
    contentArea.x1 = (window.innerWidth - containerWidth) / 2;
    contentArea.x2 = contentArea.x1 + containerWidth;
    contentArea.y1 = (window.innerHeight - 2 * containerHeight) / 2;
    contentArea.y2 = contentArea.y1 + 2 * containerHeight;
  } else {
    contentArea.x1 = (window.innerWidth - 2 * containerWidth) / 2;
    contentArea.x2 = contentArea.x1 + 2 * containerWidth;
    contentArea.y1 = (window.innerHeight - containerHeight) / 2;
    contentArea.y2 = contentArea.y1 + containerHeight;
  }

  // --- Particle Settings ---
  pSettings.count = Math.round( (window.innerWidth * window.innerHeight) / Math.pow(pSettings.density, 2));
  pSettings.phaseA = 0;
  pSettings.phaseB = pSettings.phaseAB;
  pSettings.phaseC = pSettings.phaseB + pSettings.phaseBC;
  pSettings.phaseD = pSettings.phaseC + pSettings.phaseCD;
  pSettings.phaseE = pSettings.phaseD + pSettings.phaseDE;

  return contentArea;
}

const createInitialParticles = (contentArea) => {
  let p = {
    x: [],
    y: [],
    radius: [],
    color: [],
    opacity: [],
    age: [],
    dx: [],
  };

  for(let i=0; i<pSettings.count; i++){
    p.x.push( Math.round( Math.random() * window.innerWidth ) );
    p.y.push( Math.round( Math.random() * window.innerHeight ) );
    p.radius.push( Math.round( pSettings.radiusBase + pSettings.radiusVariation * Math.random() ));
    p.color.push( pSettings.colors[Math.round(Math.random() * (pSettings.colors.length - 1))] );
    p.opacity.push(0);
    p.age.push( Math.round((pSettings.phaseE / pSettings.count) * i) );
    p.dx.push( pSettings.dx);
  }

  // console.log(p);
  return p;
}

const drawParticles = (context, p) => {  
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  context.save();
  // context.filter = settings.particleFilters;
  for(let i=0; i<pSettings.count; i++){
    context.beginPath();
    context.shadowColor = p.color[i];
    context.shadowBlur = pSettings.shadowBlur;
    context.globalAlpha = p.opacity[i];
    context.fillStyle = p.color[i];
    context.arc(
      p.x[i],
      p.y[i],
      p.radius[i],
      0,
      2 * Math.PI
    );
    context.fill();
  }
  context.restore();
}

const updateParticles = (p) => {
  for(let i = 0; i< pSettings.count; i++){
    p.age[i]++;
  }

  return p;
};