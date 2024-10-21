import React, { useState } from "react";
import { assets } from "../assets/assets";

const Header = () => {
  const [isPressed, setIsPressed] = useState(false); // State to track if the button is pressed

  return (
    <div className="flex flex-col md:flex-row bg-navy-800 rounded-lg px-6 md:px-10 lg:px-20">
      {/*----- Left Side (Text + Images + Button) ----- */}
      <div className="md:w-1/2 flex flex-col items-start justify-start gap-4 pt-20 pb-6 h-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-2">
          ORION Health<br />
          <span className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl">
          Your Health, Our Priority
          </span>
        </h1>
        <div className="flex items-start gap-4 mt-4">
          <img
            src={assets.group_profiles}
            alt="Group Profiles"
            className="w-32 sm:w-40 md:w-48 lg:w-1/4 rounded-lg object-contain mt-5"
          />
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-lg opacity-80">
            Select through our extensive list of quality healthcare providers.
            <br /> Schedule your appointment now.
          </p>
        </div>
        <a
          href="" // Replace with the desired link
          onMouseDown={() => setIsPressed(true)} // Set pressed state to true on mouse down
          onMouseUp={() => setIsPressed(false)} // Reset pressed state to false on mouse up
          onMouseLeave={() => setIsPressed(false)} // Reset pressed state if mouse leaves
          className={`mt-4 inline-flex items-center ${
            isPressed ? 'bg-purple-500' : 'bg-white text-black'
          } px-4 sm:px-6 py-3 rounded-lg hover:bg-gray-400 transition-all duration-200 transform hover:scale-105`}
        >
          Book appointment
          <img src={assets.arrow_icon} alt="arrow" className="ml-2 w-4 h-4" />
        </a>
      </div>

      {/*----- Right Side (Large Image - Header Image) ----- */}
      <div className="md:w-1/2 flex items-center justify-center h-full">
        <img
          src={assets.header_img}
          alt="Header"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Header;