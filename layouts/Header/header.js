import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import MilestoneLogo from "../../Assets/milestonelogo.png";
import { FaSearch, FaBell } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar bg-white header-container">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="header-logo d-flex align-items-center">
          <img
            src={MilestoneLogo}
            alt="Milestone Logo"
            className="logo-image"
          />
        </div>

        {/* Search Bar */}
        <div className="header-search position-relative">
          <FaSearch className="search-icon position-absolute" />
          <input
            type="text"
            className="form-control search-input rounded-pill"
            placeholder="Search..."
          />
        </div>

        {/* Notification Icon */}
        <div className="header-notification">
          <FaBell className="notification-icon" />
        </div>
      </div>
    </nav>
  );
};


export default Header;
