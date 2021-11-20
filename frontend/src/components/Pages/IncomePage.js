import React from "react";
import "./pages.css";
import Income from "../Income/index";
import IncomeTable from "../Income/IncomeTable";
import NavBar from "../NavBar";
import Header from "../Header";

const IncomePage = () => {
  return (
    <div className="details-body">
      <div className="side-container">
        <NavBar />
      </div>

      <div className="details-header-ctr">
        <Header />

        <div className="details-main-ctr">
          <Income />
          <IncomeTable />
          
        </div>

      </div>
    </div>
  );
};

export default IncomePage;