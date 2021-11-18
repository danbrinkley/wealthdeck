import React from "react";
import profilepic from "../images/profilepic.jpg";
import "./navbar.css";

const UserPic = () => {
  return (
    <div className="user_pic_ctr">
      <img className="user_pic" src={profilepic} alt="profile picture" />
      <h3 className="user-name">User Name</h3>
      <p className="user-email">username@gmail.com</p>
    </div>
  );
};

export default UserPic;
