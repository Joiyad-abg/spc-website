import React from "react";
import callLogo from "../../assets/logo/phone.svg";

const Title = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly gap-4 mt-32">
      <div className="flex flex-row justify-start md:justify-center items-center gap-4 p-4">
      <div className="flex gap-4 items-center">
          <div className="w-12 md:w-16">
            <img alt='mail' src="https://res.cloudinary.com/dvjbswt50/image/upload/v1722315580/gpm/gmail_rpg0ox.png" />
          </div>
          <div>
          <h2 className="font-bold font-xl">Reach to Us</h2>
          <h2 className="text-red-500 font-semibold">sujangarhpetcare@gmail.com</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start md:justify-center items-center gap-4 p-4">
        <div className="w-12 md:w-16">
          <img alt="call" src={callLogo} />
        </div>
        <div className="font-bold">
          <h2>24/7 Customer Support No.</h2>
          <div className="flex flex-row md:flex-col gap-1 md:gap-0">
          <a href="tel:+91 9511564636" className="text-red-500">+91 9511564636</a>
          {/* <a href="tel:+91 9461003504" className="text-red-500">+91 9461003504</a> */}
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-4 items-center p-4">
          <div className="w-12 md:w-16">
            <img alt="location" src="https://res.cloudinary.com/dvjbswt50/image/upload/v1722316682/gpm/location_ige4ip.png" />
          </div>
          <div>
            <h2 className="font-bold">Visit Us</h2>
            <div className="">

            <p className="text-red-400 font-semibold">Near PCB School, Arya Samaj Madir,</p>
            <p className="text-red-400 font-semibold">Holi Dhora, Sujangarh, Rajasthan - 331507</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
