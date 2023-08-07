import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="page-wrapper">
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
                    <i className="ri-close-line" />{" "}
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
                      className="btn style3"
                      data-bs-toggle="modal"
                      data-bs-target="#"
                    >
                      Sign In
                    </button>
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
                      Sign Up
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
        <div className="content-wrapper">
          <section className="property-details-wrap pt-75 pb-75">
            <div className="container">
              <div className="row align-items-center login_bg gx-5">
                <div className="col-md-6">
                  <div className="login-bg bg-f" />
                </div>
                <div className="col-md-6">
                  <div className="login-content">
                    <h2>Sign Up</h2>
                    <p>Please fill the form to create an account</p>
                    <form className="user-form" action="#">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              id="usrname"
                              name="usrname"
                              type="text"
                              placeholder="Username"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              id="fname"
                              name="fname"
                              type="text"
                              placeholder="Full Name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="Email"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              id="pwd_2"
                              name="pwd_2"
                              type="password"
                              placeholder="Password"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              id="pwd_3"
                              name="pwd_3"
                              placeholder="Confirm Password"
                              type="password"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-sm-12 col-12">
                          <div className="checkbox style3">
                            <input type="checkbox" id="test_1" />
                            <label htmlFor="test_1">
                              I Agree with the{" "}
                              <a
                                className="link style1"
                                href="terms-of-service.html"
                              >
                                Terms &amp; conditions
                              </a>{" "}
                              &amp;{" "}
                              <a
                                className="link style1"
                                href="privacy-policy.html"
                              >
                                privacy policy
                              </a>
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <button className="btn style1">Register Now</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer className="footer-wrap style2 blck_footer pt-100">
          <div className="footer-top">
            <div className="container">
              <div className="row pb-75">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 pe-xl-5">
                  <div className="footer-widget">
                    <a href="index.html" className="footer-logo">
                      <img
                        className="logo-light"
                        src="assets/images/white_logo.png"
                        alt="Image"
                      />
                    </a>
                    <p className="comp-desc">
                      DayOffice24 si trova in una delle più celebri piazze
                      romane situato in uno dei quattro palazzi storici della
                      zona. Piazza Bologna è un punto d’incontro tra studenti
                      universitari e uffici e aziende di diversa natura.
                    </p>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6">
                  <div className="footer-widget">
                    <h3 className="footer-widget-title">Popular Cities</h3>
                    <ul className="footer-menu list-style">
                      <li>
                        <a href="#" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          New York
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Sydney
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Dubai
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Florida
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Georgia
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Los Angeles
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 ps-xl-5">
                  <div className="footer-widget">
                    <h3 className="footer-widget-title">Quick Links</h3>
                    <ul className="footer-menu list-style">
                      <li>
                        <a href="#" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="ri-arrow-right-s-line" />
                          Terms &amp; Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div className="footer-widget">
                    <h3 className="footer-widget-title">Social</h3>
                    <ul className="social-profile list-style style1">
                      <li>
                        <a target="_blank" href="https://facebook.com">
                          <i className="ri-facebook-fill" />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://twitter.com">
                          <i className="ri-twitter-fill" />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://instagram.com">
                          <i className="ri-instagram-line" />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://linkedin.com">
                          <i className="ri-linkedin-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="footer-bottom">
              <div className="row align-items-center">
                <div className="col-md-12">
                  <p className="copyright-text">
                    <i className="ri-copyright-line" />
                    HRD Group Srl S. © 2023. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Register;
