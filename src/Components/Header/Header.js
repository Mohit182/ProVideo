import React from "react";
import "./Header.css";
import logoheader from "../../Assets/logo-header.png";
import {
  Apps,
  Menu,
  Notifications,
  Search,
  VideoCall,
} from "@material-ui/icons";
import { Avatar, Button } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <Menu className="header-menuicon" />
        <img className="header-logo" src={logoheader} alt="logo" />
      </div>

      <div className="header-center">
        <input type="text" className="header-input" placeholder="Search" />
        <Button className="header-btn">
          <Search className="header-searchIcon" />
        </Button>
      </div>

      <div className="header-right">
        <VideoCall />
        <Apps />
        <Notifications />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
