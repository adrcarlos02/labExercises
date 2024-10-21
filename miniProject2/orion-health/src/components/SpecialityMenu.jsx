import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800" id="speciality">
      <h1 className="text-5xl font-medium">Find by Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of quality health providers, schedule your appointment now.
      </p>
      <div className="flex justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link 
            onClick={() => scrollTo(0, 0)} 
            key={index} 
            to={`/doctors/${item.speciality}`} 
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 transition-all duration-500 hover:translate-y-[-10px]"
          >
            <div className="p-3 rounded-full border-4 border-navy-800 hover:border-purple-500 transition-colors duration-200 overflow-hidden transform hover:scale-105">
              <img 
                className="w-16 sm:w-24 h-auto rounded-full" 
                src={item.image} 
                alt={item.speciality} 
              />
            </div>
            <p className="text-center">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;