import React from "react";
import AutoCarousel from "../Carousel/Carousel";
import {cardsData} from '../../data/cards/cardsData'

const Front = () => {
  return (
    <div className="bg-white px-4 md:px-8 pt-8 md:pt-16">
      <AutoCarousel cardsData={cardsData} interval={10000} />
    </div>
  );
};

export default Front;
