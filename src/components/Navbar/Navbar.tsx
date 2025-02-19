import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-sm custom-navbar mt-3">
      <div className="container-fluid">
        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/donate", label: "Donate" },
              { path: "/contact", label: "Contact" },
              { path: "/supporters", label: "Our Supporters" },
            ].map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <Link
                  className={`nav-link ${
                    location.pathname === path ? "fw-bold" : ""
                  }`}
                  to={path}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
