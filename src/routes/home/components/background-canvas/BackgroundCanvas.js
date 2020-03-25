import React, { useEffect, useRef } from "react";
import "./BackgroundCanvas.scss";
import { AnimateCanvas } from "./animate-canvas";

export default function BackgroundCanvas(){
  let ref = useRef();

  AnimateCanvas(ref);

  return (
    <canvas
      id="background-canvas"
      ref={ ref }
    >
      Background Canvas
    </canvas>
  )
}