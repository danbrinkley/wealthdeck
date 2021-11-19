//import useState hook to create income collapse state
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
import { FaMoneyCheck } from "react-icons/fa";
import {FiLogOut} from "react-icons/fi";

import { GoGraph } from "react-icons/go";
import { RiBriefcase3Fill } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";

import "react-pro-sidebar/dist/css/styles.css";
import "./navbar.css";
import UserPic from "./UserPic";
import { Link, useNavigate } from "react-router-dom";
import zoomlogo from "../images/zoomlogo.png";
import Logout from "../Landing/Logout";
import {useCookies} from 'react-cookie';

const NavBar = () => {
  const [token, setToken, removeToken] = useCookies(['mytoken'])

  const [menuCollapse, setMenuCollapse] = useState(false);

 
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if(!token['mytoken']) {
       navigate('/')
       
    }
}, [token])

const logoutBtn = () => {
  removeToken(['mytoken'])

}
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <div id="header">
        {/* collapsed props to change income size using menucollapse state */}

        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="user-img">
              {/* small and big change using menucollapse state */}
              <UserPic />
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing income collapse icon on click */}
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
              <MenuItem icon={<FiLogOut />} value='Logout' ><button onClick = {logoutBtn} className = "btn btn-primary">Logout</button></MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </IconContext.Provider>
  );
};

export default NavBar;
