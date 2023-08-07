import React from "react";

const Slider = () => {
  return (
    <section className="property-wrap ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div className="section-title style1 text-center mb-40">
              <h2>Recommended For You</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidi dunt ut labore et dolore magna aliqua
                adipiscing elit.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="property-slider-two owl-carousel slide">
          <div
            className="property-card style4"
            data-aos="fade-up"
            data-aos-duration={1200}
            data-aos-delay={200}
          >
            <div className="property-img">
              <img src="images/property-19.jpg" alt="Image" />
              <span className="property-status">For Rent</span>
            </div>
            <div className="property-info">
              <h3>
                <a href="#">Luxury &amp; Modern Villa</a>
              </h3>
              <p>
                <i className="flaticon-location" />
                4521 Hilltop Street, Saint Just
              </p>
              <ul className="property-metainfo list-style">
                <li>
                  <i className="flaticon-double-bed" />
                  05
                </li>
                <li>
                  <i className="flaticon-bath-tub" />
                  04
                </li>
                <li>
                  <i className="flaticon-square" />
                  1300 sqft
                </li>
              </ul>
              <p className="property-price">
                $35,000/<span>month</span>
              </p>
            </div>
          </div>
          <div
            className="property-card style4"
            data-aos="fade-up"
            data-aos-duration={1200}
            data-aos-delay={300}
          >
            <div className="property-img">
              <img src="images/property-23.jpg" alt="Image" />
              <span className="property-status">For Rent</span>
            </div>
            <div className="property-info">
              <h3>
                <a href="#">Villa In Luis Park</a>
              </h3>
              <p>
                <i className="flaticon-location" />
                64, 1st Aveneu, High Steet, USA
              </p>
              <ul className="property-metainfo list-style">
                <li>
                  <i className="flaticon-double-bed" />
                  06
                </li>
                <li>
                  <i className="flaticon-bath-tub" />
                  04
                </li>
                <li>
                  <i className="flaticon-square" />
                  3110 sqft
                </li>
              </ul>
              <p className="property-price">
                $34,900/<span>month</span>
              </p>
            </div>
          </div>
          <div
            className="property-card style4"
            data-aos="fade-up"
            data-aos-duration={1200}
            data-aos-delay={400}
          >
            <div className="property-img">
              <img src="images/property-11.jpg" alt="Image" />
              <span className="property-status">For Rent</span>
            </div>
            <div className="property-info">
              <h3>
                <a href="#">Villa For Rent</a>
              </h3>
              <p>
                <i className="flaticon-location" />
                2983 Edwards Street, Rocky Mount
              </p>
              <ul className="property-metainfo list-style">
                <li>
                  <i className="flaticon-double-bed" />
                  04
                </li>
                <li>
                  <i className="flaticon-bath-tub" />
                  02
                </li>
                <li>
                  <i className="flaticon-square" />
                  1100 sqft
                </li>
              </ul>
              <p className="property-price">
                $22,000/<span>month</span>
              </p>
            </div>
          </div>
          <div
            className="property-card style4"
            data-aos="fade-up"
            data-aos-duration={1200}
            data-aos-delay={400}
          >
            <div className="property-img">
              <img src="images/property-27.jpg" alt="Image" />
              <span className="property-status">For Sale</span>
            </div>
            <div className="property-info">
              <h3>
                <a href="#">Condo For Sale </a>
              </h3>
              <p>
                <i className="flaticon-location" />
                1160 Horizon Circle, Pennsylvania
              </p>
              <ul className="property-metainfo list-style">
                <li>
                  <i className="flaticon-double-bed" />
                  05
                </li>
                <li>
                  <i className="flaticon-bath-tub" />
                  04
                </li>
                <li>
                  <i className="flaticon-square" />
                  2300 sqft
                </li>
              </ul>
              <p className="property-price">$44,900</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
