import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-wrap style1">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand" href="/">
            <img
              className="logo-light"
              src="assets/images/logo.svg"
              alt="logo"
            />
          </a>
          <div
            className="collapse navbar-collapse main-menu-wrap"
            id="navbarSupportedContent"
          >
            <div className="menu-close d-lg-none">
              <a href="javascript:void(0)">
                {" "}
                <i className="ri-close-line" />
              </a>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Uffici Privati
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Meeting Room
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Coworking
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Luxury Work Space
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Network
                </a>
              </li>

              <li className="nav-item d-lg-none">
                <button
                  type="button"
                  className="btn style1"
                  data-bs-toggle="modal"
                  data-bs-target="#"
                >
                  Sign Up
                </button>
              </li>
            </ul>
            <div className="others-options md-none">
              <div className="header-btn">
                <Link className="btn style3" to="/login">
                  Sign In
                </Link>
                <Link className="btn style1" to="/register">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="mobile-bar-wrap">
          <div className="mobile-menu d-lg-none">
            <a href="javascript:void(0)">
              <i className="ri-menu-line" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
