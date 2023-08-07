import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const data = {
      username: userName,
      password: password,
    };
    try {
      // Make the API request using Axios
      const response = await axios.post("https://dayoffice24.it/api/login", {
        data,
      });

      // Check the response and handle success/failure accordingly
      if (response.status === 200) {
        // Login successful
        console.log("Login successful:", response.data);
        // You may redirect the user to the dashboard or any other protected page.
      } else {
        // Login failed
        console.log("Login failed:", response.data);
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error("Error logging in:", error);
      setError("An error occurred while logging in. Please try again later.");
    }
  };
  return (
    <div>
      <div className="page-wrapper">
        <header className="header-wrap style1">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
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
                    <Link to="/" className="nav-link active">
                      Home
                    </Link>
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
                {/* <div className="others-options md-none">
                  <div className="header-btn">
                    <a className="btn style3" href="/login">
                      Sign In
                    </a>
                    <a className="btn style1" href="/login">
                      Sign Up
                    </a>
                  </div>
                </div> */}
                <Link to="/register">sign Up</Link>
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
                    <h2>Sign In</h2>
                    <form onSubmit={handleLogin} className="user-form">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              id="text"
                              name="username"
                              type="text"
                              placeholder="Username"
                              required
                              value={userName}
                              onChange={handleUserNameChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              id="password"
                              name="password"
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={handlePasswordChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <button type="submit" className="btn style1">
                              Login Now
                            </button>
                          </div>
                        </div>
                        {error && <span className="error">{error}</span>}
                        <a href="#">Forgot Password?</a>
                        <div className="col-12">
                          <p className="text-center mb-10">Or</p>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <button type="button" className="btn fb">
                              SignIn With Facebook{" "}
                              <span>
                                <i className="ri-facebook-fill" />
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <button type="button" className="btn linkedin">
                              SignIn With Linkedin{" "}
                              <span>
                                <i className="ri-linkedin-fill" />
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group mb-0">
                            <button type="button" className="btn twitter">
                              SignIn With Twitter{" "}
                              <span>
                                <i className="ri-twitter-fill" />
                              </span>
                            </button>
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
      <a href="javascript:void(0)" className="back-to-top bounce">
        <i className="ri-arrow-up-s-line" />
      </a>
      <div className="modal fade" id="signIn" tabIndex={-1} role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ri-close-line" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
