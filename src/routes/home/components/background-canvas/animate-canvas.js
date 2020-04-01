import { useEffect } from "react";
import { pSettings } from "./settings";

// ==========================
// ===== ANIMATE CANVAS =====
// ==========================
export function AnimateCanvas(ref){
  useEffect( () => {
    // --- Canvas Variables ---
    const canvas = ref.current;
    const context = canvas.getContext("2d");
    let contentArea;
    let requestID;
    let p;

    // --- Canvas Functions ---
    const animateParticles = () => {
      p = updateParticles(p, contentArea);
      drawParticles(context, p, contentArea);
      requestID = requestAnimationFrame(animateParticles);
    }

    const initialize = () => {
      contentArea = setCanvas(canvas);
      window.addEventListener("resize", restartAnimation);
      p = createInitialParticles();
      animateParticles();
    }

    const restartAnimation = () => {
      window.cancelAnimationFrame(requestID);
      window.removeEventListener("resize", restartAnimation);
      setTimeout( () => {
        initialize();
      }, 300);
    }
  
    // --- Start ---
    initialize();

    // --- Cleanup ---
    return () => {
      window.cancelAnimationFrame(requestID);
      window.removeEventListener("resize", restartAnimation);
    }
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
    contentArea.x1 = (window.innerWidth - containerWidth) / 2 + containerWidth * 1 / 22;
    contentArea.x2 = contentArea.x1 + containerWidth - containerWidth * 1.5 / 22;
    contentArea.y1 = (window.innerHeight - 2 * containerHeight) / 2 - containerWidth * 1.5 / 22;
    contentArea.y2 = contentArea.y1 + 2 * containerHeight + containerWidth * 1 / 22;
  } else {
    contentArea.x1 = (window.innerWidth - 2 * containerWidth) / 2;
    contentArea.x2 = contentArea.x1 + 2 * containerWidth - containerWidth * 3 / 22;
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

const createInitialParticles = () => {
  let p = {
    x: [],
    y: [],
    radius: [],
    color: [],
    opacity: [],
    age: [],
    directionX: [],
    directionY: [],
  };

  for(let i=0; i<pSettings.count; i++){
    p.x.push( Math.round( Math.random() * window.innerWidth ) );
    p.y.push( Math.round( Math.random() * window.innerHeight ) );
    p.radius.push( Math.round( pSettings.radiusBase + pSettings.radiusVariation * Math.random() ));
    p.color.push( pSettings.colors[Math.round(Math.random() * (pSettings.colors.length - 1))] );
    p.opacity.push(0);
    p.age.push( Math.round((pSettings.phaseE / pSettings.count) * i) );
    p.directionX.push( Math.random() < 0.5 ? -1 : 1);
    p.directionY.push( Math.random() < 0.5 ? -1 : 1);
  }

  return p;
}

const drawParticles = (context, p, contentArea) => {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);

  context.save();
  // context.filter = pSettings.filters;
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

const updateParticles = (p, contentArea) => {
  for(let i = 0; i< pSettings.count; i++){
    p.age[i]++;
    if(p.age[i] > pSettings.phaseE){
      p.x[i] = Math.round( Math.random() * window.innerWidth );
      p.y[i] = Math.round( Math.random() * window.innerHeight );
      p.radius[i] = Math.round( pSettings.radiusBase + pSettings.radiusVariation * Math.random() );
      p.color[i] = pSettings.colors[Math.round(Math.random() * (pSettings.colors.length - 1))];
      p.opacity[i] = 0;
      p.age[i] = 0;
    }

    // --- Phase AB ---
    if(p.age[i] < pSettings.phaseB){
      // ... X Coord ...
      p.x[i] = +(p.x[i] + (p.directionX[i] * pSettings.dxSlow)).toFixed(2);
      // ... Y Coord ...
      p.y[i] = +(p.y[i] + p.directionY[i] * pSettings.yAmplitude * Math.sin( 2 * Math.PI * ( p.age[i] / pSettings.phaseE))).toFixed(2);
      // ... Opacity ...
      if(p.x[i] > contentArea.x1 && p.x[i] < contentArea.x2 && p.y[i] > contentArea.y1 && p.y[i] < contentArea.y2){
        if(p.opacity[i] !== 0){
          p.opacity[i] = +(p.opacity[i] - pSettings.opacityRate).toFixed(3);
          if(p.opacity[i] < 0){
            p.opacity[i] = 0;
          }
        }
      } else {
        if(p.opacity[i] < pSettings.opacityMax){
          p.opacity[i] = +(p.opacity[i] + pSettings.opacityRate).toFixed(3);
          if(p.opacity[i] > pSettings.opacityMax){
            p.opacity[i] = pSettings.opacityMax;
          }
        }
      }
    }

    // --- Phase BC ---
    else if(p.age[i] >= pSettings.phaseB && p.age[i] < pSettings.phaseC){
      // ... X Coord ...
      p.x[i] = +(p.x[i] + (p.directionX[i] * pSettings.dxFast)).toFixed(2);
      // ... Y Coord ...
      p.y[i] = +(p.y[i] + p.directionY[i] * pSettings.yAmplitude * Math.sin( 2 * Math.PI * ( p.age[i] / pSettings.phaseE))).toFixed(2);
      // ... Opacity ...
      if(p.x[i] > contentArea.x1 && p.x[i] < contentArea.x2 && p.y[i] > contentArea.y1 && p.y[i] < contentArea.y2){
        if(p.opacity[i] !== 0){
          p.opacity[i] = +(p.opacity[i] - pSettings.opacityRate).toFixed(3);
          if(p.opacity[i] < 0){
            p.opacity[i] = 0;
          }
        }
      } else {
        if(p.opacity[i] < pSettings.opacityMax){
          p.opacity[i] = +(p.opacity[i] + pSettings.opacityRate).toFixed(3);
          if(p.opacity[i] > pSettings.opacityMax){
            p.opacity[i] = pSettings.opacityMax;
          }
        }
      }
    }

    // --- Phase CD ---
    else if(p.age[i] >= pSettings.phaseC && p.age[i] < pSettings.phaseD){
      // ... X Coord ...
      p.x[i] = +(p.x[i] + (p.directionX[i] * pSettings.dxSlow)).toFixed(2);
      // ... Y Coord ...
      p.y[i] = +(p.y[i] + p.directionY[i] * pSettings.yAmplitude * Math.sin( 2 * Math.PI * ( p.age[i] / pSettings.phaseE))).toFixed(2);
      // ... Opacity ...
      if(p.opacity[i] !== 0){
        p.opacity[i] = +(p.opacity[i] - pSettings.opacityRate).toFixed(3);
        if(p.opacity[i] < 0){
          p.opacity[i] = 0;
        }
      }
    }

    // --- Phase DE ---
    else {
      p.opacity[i] = 0;
    }
  }

  // console.log("Age:", p.age[0], "Y:", p.y[0]);

  return p;
};