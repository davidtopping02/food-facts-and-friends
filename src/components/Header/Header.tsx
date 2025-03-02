import React from "react";
import logo from "../../assets/images/fff_logo.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-5 col-md-4 text-center text-md-end">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="col-7 col-md-6 text-center text-md-start">
          <h1>Food Facts and Friends</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
