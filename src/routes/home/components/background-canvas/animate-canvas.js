import { useEffect } from "react";

// === Particle Settings ===
let settings = {
  particleCount: 100,

  phase1: 90,
  phase2: 120,
  phase3: 30,
  phase4: 10,
  
  amplitude1: 1,
  amplitude2: 2,
  amplitude3: 1,
  // particleOpacityMax: 0.5,

  // particleOpacityGrowSpeed: 0.01,
  // particleOpacityAge: 20,
  // particleOpacityAgeSpeed: 0.1,
  
  // particleTranslateGrow: 1,
  // particleTranslateGrowVariation: 1,
  // particleTranslateAge: 4,
  // particleTranslateAgeVariation: 2,
  
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
    let opacityIncrement = settings.particleOpacityMax / settings.particleOpacityAge;
    const maxAge = settings.phase1 + settings.phase2 + settings.phase3 + settings.phase4;

    const phase1_ratio = 1 / settings.phase1;
  
    // --- Canvas Arrays ---
    let particle_x = [];
    let particle_y = [];
    let particle_radius = [];
    let particle_color = [];
    let particle_age = [];
    let particle_opacity = [];
    let particle_directionX = [];
    let particle_directionY = [];
  
    // --- Canvas Functions ---
    const createInitialParticles = () => {
      particle_x = [];
      particle_y = [];
      particle_radius = [];
      particle_color = [];
      particle_opacity = [];
      particle_age = [];
      particle_directionX = [];
      particle_directionY = [];

      // const ageIncrement = maxAge / settings.particleCount;
      for(let i=0; i<settings.particleCount; i++){
        particle_x.push(
          Math.round(Math.random() * window.innerWidth)
        );
        particle_y.push(
          Math.round(Math.random() * window.innerWidth)
        );
        particle_radius.push(
          settings.particleRadiusBase + Math.round( Math.random() * settings.particleRadiusVariation)
        );
        particle_color.push(
          settings.colors[Math.round((settings.colors.length - 1) * Math.random())]
        );
        particle_opacity.push(0);
        particle_age.push(Math.floor( (maxAge / settings.particleCount) * i));
        particle_directionX.push(Math.random() < 0.5 ? -1 : 1);
        particle_directionY.push(Math.random() < 0.5 ? -1 : 1);
      }
  
    }
  
    const drawParticles = () => {
      // /*
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.save();
      // context.filter = settings.particleFilters;
      for(let i=0; i<particle_age.length; i++){
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
      // */
    }

    // console.log((0.5 - 0.5) * 4);

    const updateParticles = () => {
      for(let i=0; i<particle_age.length; i++){
        // const rand1 = Math.random() < 0.5 ? -1 : 1;
        // const rand2 = Math.random() < 0.5 ? -1 : 1;
        // --- Particle Age ---
        particle_age[i]++;
        if(particle_age[i] > maxAge){
          particle_age[i] = 0;
          particle_x[i] = Math.round(Math.random() * window.innerWidth);
          particle_y[i] = Math.round(Math.random() * window.innerHeight);
          particle_radius[i] = settings.particleRadiusBase + Math.round( Math.random() * settings.particleRadiusVariation);
          particle_opacity[i] = 0;
        }
        // --- Phase 1 ---
        if(particle_age[i] <= settings.phase1){
          // console.log("Phase1");
          // particle_x[i] += _translate(particle_directionX[i], settings.amplitude1, particle_age[i]);
          particle_x[i] += Math.round((particle_age[i] / maxAge) * 0.1 * settings.phase1);
          particle_y[i] += _translate(particle_directionY[i], settings.amplitude1, particle_age[i]);
          // particle_x[i] = Math.round(particle_x[i] + particle_directionX[i] * settings.amplitude1 * Math.sin(2 * Math.PI * (particle_age[i] / maxAge)) + particle_directionX[i] * settings.amplitude1);
          // particle_y[i] = Math.round(particle_y[i] + particle_directionY[i] * settings.amplitude1 * Math.sin(2 * Math.PI * (particle_age[i] / maxAge)) + particle_directionY[i] * settings.amplitude1);
          particle_opacity[i] = particle_age[i] * phase1_ratio * 1;
          particle_radius[i] += 0.1;
        }
        else if(particle_age[i] > settings.phase1 && particle_age[i] <= (settings.phase2 + settings.phase1)){
          // console.log("Phase 2");
          // particle_x[i] += _translate(particle_directionX[i], settings.amplitude2, particle_age[i]);
          particle_x[i] += Math.round((particle_age[i] / maxAge) * 0.2 * settings.phase2);
          particle_y[i] += _translate(particle_directionY[i], settings.amplitude2, particle_age[i]);
          // particle_x[i] = Math.round(particle_x[i] + particle_directionX[i] * settings.amplitude2 * Math.sin(2 * Math.PI * (particle_age[i] / maxAge)) + particle_directionX[i] * settings.amplitude2);
          // particle_y[i] = Math.round(particle_y[i] + particle_directionY[i] * settings.amplitude2 * Math.sin(2 * Math.PI * (particle_age[i] / maxAge)) + particle_directionY[i] * settings.amplitude2);
          // 
        }
        else if(particle_age[i] > (settings.phase2 + settings.phase1) && particle_age[i] <= (settings.phase3 + settings.phase2 + settings.phase1)){
          // particle_x[i] += _translate(particle_directionX[i], settings.amplitude3, particle_age[i]);
          particle_x[i] += Math.round((particle_age[i] / maxAge) * 0.1 * settings.phase3);
          particle_y[i] += _translate(particle_directionY[i], settings.amplitude3, particle_age[i]);
          // console.log("Phase 3");
          // particle_x[i] = Math.round(particle_x[i] + particle_directionX[i] * settings.amplitude3 * Math.sin(2 * Math.PI * (particle_age[i] / maxAge)) + particle_directionX[i] * settings.amplitude3);
          // particle_y[i] = Math.round(particle_y[i] + particle_directionY[i] * settings.amplitude3 * Math.sin(2 * Math.PI * (particle_age[i] / maxAge)) + particle_directionY[i] * settings.amplitude3);
          particle_opacity[i] = (settings.phase3 + settings.phase2 + settings.phase1 - particle_age[i]) / settings.phase3;
        }
        else {
          // console.log("Phase 4");
          particle_radius[i] += 1;
        }
      }
    }

    const _translate = (direction, amplitude, currentAge) => {
      let y = direction * amplitude * Math.sin((2 * Math.PI / maxAge) * currentAge + Math.PI / 2);
      // console.log(y);
      return Math.round(y);
    }

    const animateParticles = () => {
      const i = 0;
      // setTimeout( () => {
      //   // console.log("Age:", particle_age[i], "Opacity:", particle_opacity[i], "X:", particle_x[i]);
      // }, 1);
      // console.log("Age:", particle_age[i], "X:", particle_x[i]);
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
      animateParticles();
    }
  
    // --- Start ---
    initialize();
    // drawParticles();
    

    // console.log("X:", particle_x);
    // console.log("Y:", particle_y);
    // console.log("Radius:", particle_radius);
    // console.log("Color:", particle_color);
    // console.log("Opacity:", particle_opacity);
    // console.log("Life:", particle_age);
  });
}