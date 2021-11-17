//import useState hook to create menu collapse state
import React, { useState, useEffect, Fragment } from "react";
import { IconContext } from "react-icons";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";

//import icons from react icons
import { FaMoneyCheck, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { RiBriefcase3Fill } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./navbar.css";
import UserPic from "./UserPic";
import { Link } from "react-router-dom";
import zoomlogo from "../images/zoomlogo.png";

const NavBar = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}

        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="user-img">
              {/* small and big change using menucollapse state */}
              <UserPic />
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {/* {menuCollapse ? (
                <FiArrowRightCircle size={30}/>
              ) : (
                <FiArrowLeftCircle size={30}/>
              )} */}
            </div>
          </SidebarHeader>
          <SidebarContent>
            {" "}
            <Menu iconShape="square">
              <MenuItem active={true} icon={<GoGraph />}>
                <Link to="/dashboard">
                  <p className="sidebar-links">Dashboard</p>
                </Link>
              </MenuItem>
              <MenuItem icon={<MdAttachMoney />} active={true}>
                <Link to="/income">
                  <p className="sidebar-links">Income</p>
                </Link>
              </MenuItem>
              <MenuItem icon={<FaMoneyCheck />} active={true}>
                <Link to="/assets">
                  <p className="sidebar-links">Assets</p>
                </Link>
              </MenuItem>
              <MenuItem icon={<RiBriefcase3Fill />} active={true}>
                <Link to="/liabilities">
                  <p className="sidebar-links">Liabilites</p>
                </Link>
              </MenuItem>
              <img src={zoomlogo} className="side-logo" alt="sidebar logo" />
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} active={true}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
