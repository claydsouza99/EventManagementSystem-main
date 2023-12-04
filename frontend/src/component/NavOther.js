import { Link } from "react-router-dom";
import logo from "../images/logonav.jpg";
import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black py-3 px-5 fs-5 ">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src={logo} alt="not found" width="100" height="40"/>
            
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="packages">
                  Packages
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
