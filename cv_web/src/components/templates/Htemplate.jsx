import React from "react";
import Body from "../organismos/BodyH";
import bgimg from "./profile.png";
import './img.css'

export default function Htemplate() {
  return (
    <div className="App">
      <Body />
      <img className="img" src={bgimg} alt="profile" />
    </div>
  );
}
