import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import anime from "animejs/lib/anime.es";

import "./root.scss";

import Logo from "./components/logo/logo";
import Message from "./components/message/message";
import Subtitle from "./components/subtitle/subtitle";
import Routes from "./components/routes/routes";

export default function RouteRoot(){
  let history = useHistory();

  useEffect( () => {
    anime({
      targets: ".root",
      complete: () => {
        history.push("/home");
      },
      duration: 16000
    });
  });

  return (
    <div className="root">
      <div className="root-content">
        <Logo />
        <Subtitle />
        <Message />
      </div>

      <Routes />
    </div>
  )
}

