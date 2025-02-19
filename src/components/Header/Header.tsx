import React from "react";
import logo from "../../assets/images/logo.jpg";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Welcome to Food Facts and Friends</h1>
    </div>
  );
};

export default Header;
