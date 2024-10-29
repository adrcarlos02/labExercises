import React, { forwardRef } from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = forwardRef((props, ref) => {
  // Map specialty names to layman terms
  const specialityTerms = {
    "General Physician": "General Physician",
    "Gynecologist": "Maternal Health",
    "Dermatologist": "Skin Health",
    "Pediatrician": "Child Health",
    "Neurologist": "Neurology"
  };

  return (
    <div ref={ref} className="flex flex-col items-center gap-6 py-12 text-gray-800">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center">Find by Speciality</h1>
      <p className="w-4/5 sm:w-2/3 lg:w-1/3 text-center text-sm lg:text-base">
        Simply browse through our extensive list of quality health providers, schedule your appointment now.
      </p>
      <div className="flex flex-wrap justify-center gap-4 pt-6 w-full sm:w-3/4 lg:w-full">
        {specialityData.map((item, index) => (
          <Link 
            key={index} 
            to={`/doctors/${item.speciality}`} 
            className="flex flex-col items-center text-xs sm:text-sm cursor-pointer flex-shrink-0 transition-transform duration-300 hover:translate-y-[-5px]"
          >
            <div className="p-3 rounded-full border-2 sm:border-4 border-gray-800 hover:border-purple-500 transition-all duration-200 transform hover:scale-105">
              <img 
                className="w-12 sm:w-16 lg:w-24 h-auto rounded-full" 
                src={item.image} 
                alt={item.speciality} 
              />
            </div>
            <p className="text-center mt-2">{specialityTerms[item.speciality] || item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
});

export default SpecialityMenu;