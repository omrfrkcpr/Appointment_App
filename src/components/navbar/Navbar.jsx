import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="img-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
    </div>
  );
};

export default Navbar;
