import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link
} from "react-router-dom";

import Signup from "./Signup";
import "./landing.css";

const Landing = () => {
  return (
    <div className="App">
      <div className="appAside" />
      <div className="appForm">
        <div className="pageSwitcher">
          <NavLink
            to="/login"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem"
          >
            Log In
          </NavLink>
          <NavLink
            exact
            to="/signup"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem"
          >
            Sign Up
          </NavLink>
        </div>

        <div className="formTitle">
          <NavLink
            to="/login"
            activeClassName="formTitleLink-active"
            className="formTitleLink"
          >
            Log In
          </NavLink>{" "}
          or{" "}
          <NavLink
            exact
            to="/signup"
            activeClassName="formTitleLink-active"
            className="formTitleLink"
          >
            Sign Up
          </NavLink>
          <Link to={"/dashboard"}>Dashboard</Link>
        </div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
};

export default Landing;
