import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
// import Time from "./Time";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="img-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      {/* <Time /> */}
      <h3 className="title">Appointment Management System (AMS)</h3>
    </div>
  );
};

export default Navbar;
