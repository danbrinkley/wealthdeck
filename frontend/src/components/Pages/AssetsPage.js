import React from "react";
import "./pages.css";
import Assets from "../Assets";
import NavBar from "../NavBar";
import Header from "../Header";
import AssetTable from "../Assets/AssetTable"

const AssetsPage = () => {
  return (
    <div className="details-body">
      <div className="side-container">
        <NavBar />
      </div>

      <div className="details-header-ctr">
        <Header />

        <div className="details-main-ctr">
          <Assets />
          <AssetTable />
          </div>
        </div>
    </div>
  );
};

export default AssetsPage;
