import React, { Fragment } from "react";
import Food from "../components/Home/Food.jsx";
import Faq from "../components/Home/Faq";
import Home from "../components/Home/Home";
import { TabChange } from "../utils/dynamic-title-function.js";
import Reviews from "../components/Reviews/Reviews.jsx";
import Title from "../components/Title/Title.jsx";

const HomePage = () => {
  TabChange("Sujangarh Pet Care");
  return (
    <Fragment>
      <Title />
      <Home />
      <Food />
      <Reviews />
      <Faq />
    </Fragment>
  );
};

export default HomePage;
