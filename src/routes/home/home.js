import React from "react";
import {
  Link
} from "react-router-dom";
import "./home.scss";

import BackgroundCanvas from "./components/background-canvas/BackgroundCanvas";
import Logo from "./components/logo/logo";
import Message from "./components/message/message";
import Subtitle from "./components/subtitle/subtitle";

export default function RouteRoot(){
  return (
    <div className="home">
      <BackgroundCanvas />
      <div className="home-content">
        <Logo />
        <Subtitle />
        <Message />
      </div>

      <div className="home-routes">
        <Link className="home-routes-link" to="/projects">Projects</Link>
        <Link className="home-routes-link" to="/snippets">Code Snippets</Link>
        <Link className="home-routes-link" to="/about">About Me</Link>
        <Link className="home-routes-link" to="/contact">Contact</Link>
      </div>
    </div>
  )
}

