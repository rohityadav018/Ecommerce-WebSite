import React from "react";
import "./App.css";
import Logo from "./AppLogo";
import { Link } from "react-router-dom";
import GetStarted from "./button_logo.svg";

function StartingPage() {
  return (
    <div className="MainStartingPage">
      <span className="WebsiteHeading">
        SH
        <Logo logoEdit="Ologo-wrapper" />
        PEY
      </span>
      <Link exact to="/home">
        <img src={GetStarted} className="Btn-getstarted" alt="img" />
      </Link>
    </div>
  );
}

export default StartingPage;
