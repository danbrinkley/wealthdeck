//import useState hook to create menu collapse state
import React, { useState, useEffect, Fragment } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaMoneyCheck, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { RiBriefcase3Fill } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";






//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./navbar.css";
import UserPic from './UserPic'
import { Link } from "react-router-dom"
import logo from '../../images/logo.png'


const NavBar = () => {

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
    
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
    {isAuth === true ? (
      <Fragment>
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <UserPic />
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
              {' '}
            <Menu iconShape="square">
              <MenuItem active={true} icon={<GoGraph size={30} />}><Link to='/dashboard'>
                Dashboard
                </Link>
              </MenuItem>
              <MenuItem icon={<MdAttachMoney size={80} />}><Link to='/income'>Income</Link></MenuItem>
              <MenuItem icon={<FaMoneyCheck size={30} />}><Link to='/assets'>Assets</Link></MenuItem>
              <MenuItem icon={<RiBriefcase3Fill size={50} />}><Link to='/liabilities'>Liabilites</Link></MenuItem>
              <img src={logo} className="side-logo" alt="sidebar logo" />
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter> 
        </ProSidebar>
      </Fragment>
          ) : (
      <Fragment>
              {' '}
              <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <img src={logo} className="side-logo" alt="sidebar logo" />
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
              {' '}
            <Menu iconShape="square">
              <MenuItem active={true} icon={<GoGraph size={30} />}><Link to='/login'>
                Login
                </Link>
              </MenuItem>
              <MenuItem icon={<MdAttachMoney size={80} />}><Link to='/signup'>Signup</Link></MenuItem>
 
            </Menu>
          </SidebarContent>
          {/* <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>  */}
        </ProSidebar>
      </Fragment>
          )}
      </div>
    </>
  );
};

export default NavBar;