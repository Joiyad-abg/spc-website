import React from "react";
import Lottie from "lottie-react";
import loaderData from "../../assets/animations/loader.json";

const Loader = () => {
  return (
    <div className="bg-loaderbg w-full h-screen flex justify-center items-center flex-col">
      <div className="w-[50vh] md:w-[70vh] h-[50vh] md:h-[70vh]">
        <Lottie animationData={loaderData} />
        <h1 className="text-center font-bold">Sujangarh Pet Care</h1>
      </div>
    </div>
  );
};

export default Loader;
