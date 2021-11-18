import React from "react";
import "./pages.css";
import Assets from "../Assets";
import NavBar from "../NavBar";
import Header from "../Header";

const AssetsPage = () => {
  return (
    <div className="details-body">
      <div className="details-side-container">
        <NavBar />
      </div>

      <div className="details-main-container">
        <Header />

        <div className="details-main-row1-ctr">
          <Assets />
          <div>Graph and Form will go here</div>
        </div>

        <div className="details-main-row2-ctr">Table will go here</div>
      </div>
    </div>
  );
};

export default AssetsPage;
