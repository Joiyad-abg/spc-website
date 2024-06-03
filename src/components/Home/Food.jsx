import React from "react";
import { motion } from "framer-motion";
import Heading from "../Heading/Heading";
import FoodCard from "../FoodCard/FoodCard";
import { foodData } from "../../data/products/food/foodData";
import { catFoodData } from "../../data/products/food/catFoodData";
import { accessoryData } from "../../data/products/food/accessoryData";

const Food = () => {
  return (
    <div className="w-full px-4 md:px-12 overflow-hidden">
      <div>
        <Heading title="Top Pics: Best Dog Food & Treats" />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ ease: "easeOut", duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-2 md:p-4 flex flex-wrap justify-center items-center gap-4 md:gap-6"
        >
          {foodData.map(({ id, imageUrl, description }) => (
            <FoodCard key={id} imageUrl={imageUrl} description={description} />
          ))}
        </motion.div>
        <div className="flex justify-center">
          <button
            onClick={() => alert("More Products will be updated soon.")}
            className="border border-red-500 hover:bg-red-500 rounded-lg px-2 md:px-8 py-2 text-red-500 hover:text-white"
          >
            View More
          </button>
        </div>
      </div>
      <div>
        <Heading title="Top Pics: Best Cat Food & Treats" />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ ease: "easeOut", duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-2 md:p-4 flex flex-wrap justify-center items-center gap-4 md:gap-6"
        >
          {catFoodData.map(({ id, imageUrl, description }) => (
            <FoodCard key={id} imageUrl={imageUrl} description={description} />
          ))}
        </motion.div>
        <div className="flex justify-center">
          <button
            onClick={() => alert("More Products will be updated soon.")}
            className="border border-red-500 hover:bg-red-500 rounded-lg px-2 md:px-8 py-2 text-red-500 hover:text-white"
          >
            View More
          </button>
        </div>
      </div>
      <div>
        <Heading title="Top Pics: Best Accessories" />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ ease: "easeOut", duration: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-2 md:p-4 flex flex-wrap justify-center items-center gap-4 md:gap-6"
        >
          {accessoryData.map(({ id, imageUrl, description }) => (
            <FoodCard key={id} imageUrl={imageUrl} description={description} />
          ))}
        </motion.div>
        <div className="flex justify-center">
          <button
            onClick={() => alert("More Products will be updated soon.")}
            className="border border-red-500 hover:bg-red-500 rounded-lg px-2 md:px-8 py-2 text-red-500 hover:text-white"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food;
