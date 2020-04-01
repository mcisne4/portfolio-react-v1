import React from "react";
import "./root.scss";

import Logo from "./components/logo/logo";
import Message from "./components/message/message";
import Subtitle from "./components/subtitle/subtitle";
import Routes from "./components/routes/routes";

export default function RouteRoot(){
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

