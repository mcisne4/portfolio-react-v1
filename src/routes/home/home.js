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
      <div className="home-content">
        <BackgroundCanvas />
        <Logo />
        <Subtitle />
        <Message />
      </div>

      <div className="home-routes">
        <Link className="home-routes-link" to="/">Projects</Link>
        <Link className="home-routes-link" to="/">Code Snippets</Link>
        <Link className="home-routes-link" to="/">About Me</Link>
        <Link className="home-routes-link" to="/">Contact</Link>
      </div>
    </div>
  )
}

