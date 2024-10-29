import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import skinHealthImage from '../assets/BannerSkinHealth.png';

const BannerSkinHealth = () => (
  <Link to="/doctors/Dermatologist" className="relative w-full h-0 pb-[75%] rounded-lg shadow-lg overflow-hidden group"> {/* Wrap in Link */}
    <img 
      src={skinHealthImage} 
      alt="Skin Health" 
      className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 ease-in-out hover:opacity-80" 
      style={{ aspectRatio: '4 / 3' }} 
    />
    <div className="absolute bottom-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-gray-800 opacity-75 p-5 md:p-7 lg:p-9">
      {/* Separate div for h2 */}
      <div className="flex justify-center items-center h-1/2"> {/* Adjust height as needed */}
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold text-center pt-10 md:pt-20"> {/* Responsive title */}
          Skin Health
        </h2>
      </div>
      {/* Separate div for p, shown on hover of the image */}
      <div className="flex justify-center items-center mt-0">
        <p className="text-white text-sm md:text-base lg:text-lg text-center hidden md:block opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"> {/* Appear on hover */}
          Expert dermatological services for skin wellness. Our dermatology team provides comprehensive skin care, including treatment for acne, eczema, psoriasis, and skin cancer screenings. We utilise advanced diagnostic techniques and cutting-edge treatments to address a wide range of skin concerns. With a focus on preventive care, we also offer education on skincare routines and sun protection to maintain healthy skin at all ages.
        </p>
      </div>
    </div>
  </Link>
);

export default BannerSkinHealth;