import { useEffect } from "react";

// === Particle Settings ===
let settings = {
  particleCount: 10,
  particleLife: 2000,
  particleLifeSpacing: 20,
  particleOpacityFade: 200,
  particleOpacitySpeed: 0.01,
  particleOpacityMax: 0.5,
  particleFilters: "blur(2px)",
  particleSpeed: 2,
  radiusBase: 5,
  radiusVariation: 5,
  containerX: 352,
  containerY: 308,
  containerBreak: 768,
  colors: [
    "#aaff00",
    "#05ff00",
  ]
};

// ==========================
// ===== ANIMATE CANVAS =====
// ==========================
export function AnimateCanvas(ref){
  useEffect( () => {
    // --- Canvas Variables ---
    const canvas = ref.current;
    const context = canvas.getContext("2d");
    // eslint-disable-next-line
    let requestID;
    let contentArea = {};
  
    // --- Canvas Arrays ---
    let particle_x = [];
    let particle_y = [];
    let particle_radius = [];
    let particle_color = [];
    let particle_life = [];
    let particle_opacity = [];
  
    // --- Canvas Functions ---
    const createParticle = () => {
      particle_radius.push(
        settings.radiusBase + Math.round( Math.random() * settings.radiusVariation)
      );
      particle_x.push(
        Math.round(Math.random() * window.innerWidth)
      );
      particle_y.push(
        Math.round(Math.random() * window.innerWidth)
      );
      particle_color.push(
        settings.colors[Math.round((settings.colors.length - 1) * Math.random())]
      );
      particle_life.push( settings.particleLife );
      particle_opacity.push( 0 );
    }
  
    const createInitialParticles = () => {
      particle_radius = [];
      particle_x = [];
      particle_y = [];
      particle_color = [];
      // particle_life = [];
      particle_opacity = [];
  
      createParticle();
      particle_life = [0];
  
      while(particle_life[particle_life.length - 1] < settings.particleLife){
        createParticle();
        particle_life[particle_life.length - 1] = particle_life[particle_life.length - 2] + settings.particleLifeSpacing;
      }
    }
  
    // eslint-disable-next-line
    const drawParticles = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.save();
      // context.filter = settings.particleFilters;
      for(let i=0; i<particle_life.length; i++){
        context.beginPath();
        // context.shadowColor = particle_color[i];
        context.globalAlpha = particle_opacity[i];
        context.fillStyle = particle_color[i];
        context.arc(
          particle_x[i],
          particle_y[i],
          particle_radius[i],
          0,
          2 * Math.PI
        );
        context.fill();
      }
      context.restore();
    }

    const updateParticles = () => {
      // --- Remove Dead Particle ---
      if(particle_life[0] < 0){
        particle_x.shift();
        particle_y.shift();
        particle_radius.shift();
        particle_color.shift();
        particle_opacity.shift();
        particle_life.shift();
        createParticle();
      }
      for(let i=0; i<particle_life.length; i++){
        // --- Coordinates ---
        if( particle_opacity[i] === settings.particleOpacityMax){
          particle_x[i] += settings.particleSpeed * (Math.random() < 0.5 ? -1 : 1);
          particle_y[i] += settings.particleSpeed * (Math.random() < 0.5 ? -1 : 1);
        } else {
          particle_x[i] += 0.1;
          particle_y[i] += 0.1;
        }
        // --- Opacity ---
        if(particle_life[i] < settings.particleOpacityFade){
          particle_opacity[i] -= Math.floor(settings.particleOpacityMax / settings.particleOpacityFade);
        }
        else if(particle_opacity[i] < settings.particleOpacityMax){
          particle_opacity[i] += settings.particleOpacitySpeed;
        }
        if(particle_x[i] > contentArea.x1 && particle_x[i] < contentArea.x2 && particle_y[i] > contentArea.y1 && particle_y[i] < contentArea.y2){
          particle_opacity[i] -= settings.particleOpacitySpeed * 2;
        }
        if(particle_opacity[i] < 0){
          particle_opacity[i] = 0;
        }
        // --- Age ---
        particle_life[i]--;
        // console.log(
        //   particle_x[i], ">", contentArea.x1, "|",
        //   particle_x[i], "<", contentArea.x2, "|",
        //   particle_y[i], ">", contentArea.y1, "|",
        //   particle_y[i], "<", contentArea.y2,
        //   "==>", particle_opacity[i]
        // );
      }
      console.log(particle_opacity[6]);
    }

    const animateParticles = () => {
      // console.log()
      updateParticles();
      drawParticles();

      requestID = requestAnimationFrame(animateParticles);
    }


    const initialize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if(window.innerWidth < settings.containerBreak){
        contentArea.x1 = (window.innerWidth - settings.containerX) / 2;
        contentArea.x2 = contentArea.x1 + settings.containerX;
        contentArea.y1 = (window.innerHeight - (2 * settings.containerY)) / 2;
        contentArea.y2 = contentArea.y1 + (2 * settings.containerY);
      } else {
        contentArea.x1 = (window.innerWidth - (2 * settings.containerX)) / 2;
        contentArea.x2 = contentArea.x1 + (2 * settings.containerX);
        contentArea.y1 = (window.innerHeight - settings.containerY) / 2;
        contentArea.y2 = contentArea.y1 + settings.containerY;
      }
  
      createInitialParticles();
      // updateParticles();
      // drawParticles();
      // console.log("X:", particle_x);
      // console.log("Y:", particle_y);
      // console.log("Radius:", particle_radius);
      // console.log("Color:", particle_color);
      // console.log("Opacity:", particle_opacity);
      // console.log("Life:", particle_life);
      animateParticles();
    }
  
    // --- Start ---
    initialize();

  });
}