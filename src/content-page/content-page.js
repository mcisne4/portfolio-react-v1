import React from "react";
import "./content-page.scss";

import Header from "./page-components/header/header";

export default function ContentPage(){

  let a = [];
  for(let i=0; i<20; i++){
    a.push(<h1 key={i}>Line 1</h1>);
  }

  return (
    <div className="content-page">
      <Header />

      {a}


      {/* {a.map( (val, i) => {
        <h1 key={i}></h1>
      })} */}
    </div>
  );
};