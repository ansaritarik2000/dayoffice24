import React from "react";
import Header from "../../constant/Header";
import Banner from "./Banner";
import Slider from "./Slider";
import Footer from "../../constant/Footer";
import Content from "./Content";

const Home = () => {
  return (
    <>
      {" "}
      <Header />
      <Banner />
      <Slider />
      <Content />
      <Footer />
    </>
  );
};

export default Home;
