import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import childHealthImage from '../assets/BannerChildHealth.png'; // Adjust the path accordingly

const BannerChildHealth = () => (
  <Link to="/doctors/Pediatrician" className="relative w-full h-0 pb-[75%] rounded-lg shadow-lg overflow-hidden group"> {/* Wrap in Link */}
    <img 
      src={childHealthImage} 
      alt="Child Health" 
      className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 ease-in-out hover:opacity-80" 
      style={{ aspectRatio: '4 / 3' }} // Ensures image maintains 4:3 aspect ratio
    />
    <div className="absolute bottom-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-gray-800 opacity-75 p-5 md:p-7 lg:p-9">
      {/* Separate div for h2 */}
      <div className="flex justify-center items-center h-1/2">
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold text-center pt-10 md:pt-20">
          Child Health
        </h2>
      </div>
      {/* Separate div for p, hidden on small screens */}
      <div className="flex justify-center items-center mt-0">
        <p className="text-white text-sm md:text-base lg:text-lg text-center hidden md:block opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"> {/* Hidden on small screens */}
          Paediatric care for children's health and wellness. Our dedicated team of paediatricians provides comprehensive medical care, including regular check-ups, vaccinations, and developmental assessments. We focus on preventive care to ensure healthy growth and development. Additionally, we offer specialised services for common childhood illnesses, chronic conditions, and behavioural health concerns, ensuring that your child receives the best possible care in a nurturing environment.
        </p>
      </div>
    </div>
  </Link>
);

export default BannerChildHealth;