import React from "react";
import { TabChange } from "../utils/dynamic-title-function.js";
import Heading from "../components/Heading/Heading.jsx";

const About = () => {
  TabChange("Sujangarh Pet Care | About us");
  return (
    <div className="py-40 px-4 md:px-24">
      <Heading title="Unveiling Sujangarh Pet Care: Your Premier Destination for Pet Wellness" />
      <div className="text-center">
        Welcome to Sujangarh Pet Care, your one-stop destination for all your
        pet needs in Sujangarh, Rajasthan. We offer a comprehensive range of
        services designed to ensure the well-being and happiness of your beloved
        pets. Our offerings include high-quality pet food, a wide selection of
        accessories, professional veterinary clinic services, pet buying
        facilities, and expert grooming services. At Sujangarh Pet Care, we are
        dedicated to providing exceptional care and products to keep your pets
        healthy, happy, and thriving. Visit us today and experience the best in
        pet care.
      </div>

      <Heading title="Glimpses of our shop"/>
      <div className="flex justify-center items-center">
      <video width="360" height="360" controls preload="auto">
        <source src="https://res.cloudinary.com/dvjbswt50/video/upload/v1717396349/spc/Pet_Care_Store_in_Sujangarh_fxse61.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
      </div>

      <Heading title="Message from owner" />
      <div className="text-center pb-4">
        "Dear Pet Parents, I extend a
        warm invitation to you to visit our store and experience the exceptional
        quality of care we provide for your furry family members. At Sujangarh
        Pet Care, we understand the importance of ensuring the health and
        happiness of your pets."
      </div>
      <h2 className="font-bold">Abrar Khan</h2>
      <p>Sujangarh Pet Care</p>
    </div>
  );
};

export default About;
