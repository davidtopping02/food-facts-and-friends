import React from "react";
import logo from "../../assets/images/fff_logo.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="row align-items-center justify-content-center text-center">
      {/* Logo aligned to the right */}
      <div className="col-4 d-flex justify-content-end">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Text aligned to the left */}
      <div className="col-8 d-flex flex-column align-items-start justify-content-center">
        <h1>Welcome to Food Facts and Friends</h1>
      </div>
    </div>
  );
};

export default Header;
