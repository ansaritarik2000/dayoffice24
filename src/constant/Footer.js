import React from "react";

const Footer = () => {
  return (
    <div>
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
                    DayOffice24 si trova in una delle più celebri piazze romane
                    situato in uno dei quattro palazzi storici della zona.
                    Piazza Bologna è un punto d’incontro tra studenti
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
  );
};

export default Footer;
