import React from "react";
import Login from "./Login";
import "./landing.css";
import logo from "../images/logo.png";

const Landing = () => {
  return (
    <div className="landing-ctr">
      <div className="landing-logo-ctr">
        <img src={logo} alt="website logo" />
      </div>

      <div className="landing-login">
        <Login />
      </div>
    </div>
  );
};

export default Landing;