import React from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search1">
          <SearchIcon className="searchIcon" />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="items">
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter"></div>
          </div>
          <div className="item">
            <AccountCircleOutlinedIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
