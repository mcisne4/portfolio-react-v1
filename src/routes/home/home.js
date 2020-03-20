import React from "react";

import BackgroundCanvas from "./components/background-canvas/BackgroundCanvas";

export default function RouteRoot(){
  return (
    <div className="home">
      <BackgroundCanvas />

      <div className="home-content">
        <div className="home-message">
          <h2>Hello There</h2>
          <h4>I'm</h4>
          <h1>Miguel Cisneros</h1>
          <h4>I'm a</h4>
          <h1>Web Developer</h1>
          <h4>I build</h4>
        </div>
      </div>
    </div>
  )
}

