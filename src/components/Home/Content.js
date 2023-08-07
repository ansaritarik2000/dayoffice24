import React from "react";

const Content = () => {
  return (
    <>
      <div>
        <section className="about-wrap gray_bg_updated style1 ptb-100 bg-seashell">
          <img
            src="assets/images/shape-3.png"
            alt="Image"
            className="about-shape-three"
          />
          <div className="container">
            <div className="row gx-5 align-items-center bg-white_image">
              <div
                className="col-lg-8"
                data-aos="fade-right"
                data-aos-duration={1200}
                data-aos-delay={200}
              >
                <div className="about_img">
                  <img
                    src="assets/images/pexels-mart-production-7415049.jpg"
                    alt="test"
                  />
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-left"
                data-aos-duration={1200}
                data-aos-delay={200}
              >
                <div className="about-content">
                  <div className="content-title style1">
                    <h2>Hosting opens up a world of opportunity</h2>
                    <p>Earn money sharing your extra space with travelers.</p>
                  </div>
                  <a href="#" className="btn style2">
                    See What You Can Earn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="city-wrap pt-100 pb-75 bg-seashell">
          <img
            src="assets/images/shape-2_1.png"
            alt="Image"
            className="city-shape-one"
          />
          <div className="container">
            <div className="section-title style1 text-center mb-40">
              <h2>Explore the world</h2>
              <p>See where people are traveling, all around the world.</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8 explore_left">
                <div
                  className="col-xxl-12 col-xl-12 col-lg-12 col-md-12"
                  data-aos="fade-up"
                  data-aos-duration={1200}
                  data-aos-delay={200}
                >
                  <div className="city-card style1">
                    <img src="assets/images/city-2.jpg" alt="Image" />
                    <div className="city-info">
                      <h3>
                        <a href="#">Los Angeles</a>
                      </h3>
                      <p>+1211 properties</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 explore_right">
                <div
                  className="col-xxl-12 col-xl-12 col-lg-12 col-md-12"
                  data-aos="fade-up"
                  data-aos-duration={1200}
                  data-aos-delay={200}
                >
                  <div className="city-card style1">
                    <img src="assets/images/city-1.jpg" alt="Image" />
                    <div className="city-info">
                      <h3>
                        <a href="#">New York City</a>
                      </h3>
                      <p>+5231 properties</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-12 col-xl-12 col-lg-12 col-md-12"
                  data-aos="fade-up"
                  data-aos-duration={1200}
                  data-aos-delay={200}
                >
                  <div className="city-card style1">
                    <img src="assets/images/city-5.jpg" alt="Image" />
                    <div className="city-info">
                      <h3>
                        <a href="#">San Fransisco</a>
                      </h3>
                      <p>+231 properties</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-wrap style2 ptb-100 pt-0 bg-seashell">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                <div className="section-title style1 text-center mb-40">
                  <h2>What Our Client Says</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incidi dunt ut labore et dolore magna
                    aliqua adipiscing elit.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="testimonial-slider-two owl-carousel">
              <div className="testimonial-card style2">
                <h6>Best! I Got My Dream House I Wanted Through Fela</h6>
                <p className="client-quote">
                  Lorem ipsum dolor sit amet adip elitions repellat tetur delni
                  vel quam aliq earum explibo dolor eme fugiat enim illumon amet
                  sit.
                </p>
                <div className="client-info-wrap">
                  <div className="client-img">
                    <img src="assets/images/client-2.jpg" alt="Image" />
                  </div>
                  <div className="client-info">
                    <h5>David Watson</h5>
                    <span>Director, BAT</span>
                  </div>
                  <div className="ratings">
                    <i className="flaticon-star" />
                    4.8
                  </div>
                </div>
              </div>
              <div className="testimonial-card style2">
                <h6>Awesome! Really Got What I Wanted Through Fela</h6>
                <p className="client-quote">
                  Lorem ipsum dolor sit amet adip elitions repellat tetur delni
                  vel quam aliq earum explibo dolor eme fugiat enim illumon amet
                  sit.
                </p>
                <div className="client-info-wrap">
                  <div className="client-img">
                    <img src="assets/images/client-3.jpg" alt="Image" />
                  </div>
                  <div className="client-info">
                    <h5>Tom Haris</h5>
                    <span>Civil Engineer, Olleo</span>
                  </div>
                  <div className="ratings">
                    <i className="flaticon-star" />
                    4.8
                  </div>
                </div>
              </div>
              <div className="testimonial-card style2">
                <h6>Good Job! I'll Recommend Your Service To My Friends</h6>
                <p className="client-quote">
                  Lorem ipsum dolor sit amet adip elitions repellat tetur delni
                  vel quam aliq earum explibo dolor eme fugiat enim illumon amet
                  sit.
                </p>
                <div className="client-info-wrap">
                  <div className="client-img">
                    <img src="assets/images/client-1.jpg" alt="Image" />
                  </div>
                  <div className="client-info">
                    <h5>Chris Jackson</h5>
                    <span>Enterpreneur</span>
                  </div>
                  <div className="ratings">
                    <i className="flaticon-star" />
                    4.8
                  </div>
                </div>
              </div>
              <div className="testimonial-card style2">
                <h6>Appreciate! I got the house I wanted through Fela</h6>
                <p className="client-quote">
                  Lorem ipsum dolor sit amet adip elitions repellat tetur delni
                  vel quam aliq earum explibo dolor eme fugiat enim illumon amet
                  sit.
                </p>
                <div className="client-info-wrap">
                  <div className="client-img">
                    <img src="assets/images/client-4.jpg" alt="Image" />
                  </div>
                  <div className="client-info">
                    <h5>Robert Muller</h5>
                    <span>MD, ITec</span>
                  </div>
                  <div className="ratings">
                    <i className="flaticon-star" />
                    4.8
                  </div>
                </div>
              </div>
              <div className="testimonial-card style2">
                <h6>Best! I Got My Dream House Through Fela</h6>
                <p className="client-quote">
                  Lorem ipsum dolor sit amet adip elitions repellat tetur delni
                  vel quam aliq earum explibo dolor eme fugiat enim illumon amet
                  sit.
                </p>
                <div className="client-info-wrap">
                  <div className="client-img">
                    <img src="assets/images/client-5.jpg" alt="Image" />
                  </div>
                  <div className="client-info">
                    <h5>Mark Owen</h5>
                    <span>Enterpreneur</span>
                  </div>
                  <div className="ratings">
                    <i className="flaticon-star" />
                    4.5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="add-listing-wrap">
          <div className="container-fluid px-0">
            <div className="row gx-0 ">
              <div className="col-md-6">
                <div className="add-listing-bg bg-f" />
              </div>
              <div className="col-md-6">
                <div className="listing-content ptb-100">
                  <img
                    src="assets/images/add-listing-shape.png"
                    alt="Image"
                    className="add-listing-shape"
                  />
                  <div className="content-title">
                    <h2>
                      Sei interessato ai nostri servizi?! Contattaci senza
                      impegno.
                    </h2>
                    <p>
                      est Strategic planning dolor sit amet consectetur
                      adipiscing elit. Scel erus isque ametus odio velit auctor
                      nam elit nulla eget sodales dui pulvinar. Best strategic
                      planning dolor.{" "}
                    </p>
                  </div>
                  <a href="#" className="btn style4">
                    Explore Properties
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
