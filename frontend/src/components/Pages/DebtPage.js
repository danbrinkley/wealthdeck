import React from "react";
import "./pages.css";
import Debt from "../Debt/index";
import DebtTable from "../Debt/DebtTable";
import NavBar from "../NavBar";
import Header from "../Header";

const DebtPage = () => {
  return (
    <div className="details-body">
      <div className="side-container">
        <NavBar />
      </div>

      <div className="details-header-ctr">
        <Header />

        <div className="details-main-ctr">
          <Debt />
          <DebtTable />
          
        </div>

        
      </div>
    </div>
  );
};

export default DebtPage;