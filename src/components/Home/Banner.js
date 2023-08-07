import React from "react";
import { useEffect } from "react";
import { fetchAllCountry } from "../../services/ApiServices";

const Banner = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAllCountry();
        console.log(response, "response");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function immediately
  }, []);

  return (
    <section className="hero-wrap style2 border_remove_hero">
      <div className="container-fluid14">
        <div className="hero-slider-one owl-carousel">
          <div className="hero-slide-item hero-slide-1 bg-f">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-8 col-sm-10">
                  <div className="hero-content text-center">
                    <h1>
                      Spazi di lavoro all inclusive a partire da un’ora al
                      giorno...
                    </h1>
                    <a href="#" className="btn style2">
                      How it Works
                    </a>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-10 col-md-8 col-sm-10">
                  <div
                    className="search-property style1"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={250}
                  >
                    <form action="#" className="property-search-form">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Where do you want to go?"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="date"
                          className="custom-date-input"
                          placeholder="Check In"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="date"
                          className="custom-date-input"
                          placeholder="Check Out"
                        />
                      </div>
                      <div className="form-group">
                        <select name="price-range" id="price-range">
                          <option value={0} data-display="Price Range">
                            Select Guest
                          </option>
                          <option value={1}>1 Guest</option>
                          <option value={1}>2 Guest</option>
                          <option value={1}>3 Guest</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn style2">
                          Search Property
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
