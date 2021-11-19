import React from "react";
import "./pages.css";
import Income from "../Income/index";
import IncomeList from "../Income/IncomeList";
import NavBar from "../NavBar";
import Header from "../Header";

const IncomePage = () => {
  return (
    <div className="details-body">
      <div className="details-side-container">
        <NavBar />
      </div>

      <div className="details-main-container">
        <Header />

        <div className="details-main-row1-ctr">
          <Income />
          
        </div>

        <div className="details-main-row2-ctr">Table will go here</div>
        <IncomeList />
      </div>
    </div>
  );
};

export default IncomePage;