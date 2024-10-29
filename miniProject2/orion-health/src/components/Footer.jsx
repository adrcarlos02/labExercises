import React from 'react';
import { assets } from '../assets/assets'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom'; // Import navigate if using react-router-dom

const Footer = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="text-dark-gray py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4">

        {/* ---- Left Section ---- (60%) */}
        <div className="mb-6 md:mb-0 flex-[6] flex flex-col md:flex-row items-start"> {/* Adjusted to allow stacking */}
          <img 
            onClick={() => navigate('/')} 
            src={assets.logo} 
            alt='Orion Health logo' 
            className="cursor-pointer w-64 h-auto mb-4 md:mb-0 md:mr-4" 
            aria-label="Orion Health logo - navigate to home" // Accessibility label
          />
          <p className="text-sm max-w-[50%]">
            At ORION Health, we prioritize your well-being by offering high-quality healthcare services tailored to your needs, whether you seek a routine check-up, specialized treatment, or lifestyle advice to support your journey to better health.
          </p>
        </div>

        {/* ---- Middle Section  ---- (20%) */}
        <div className="mb-6 md:mb-0 flex-[2] text-left flex flex-col">
          <p className="font-semibold">COMPANY</p>
          <ul className="list-none p-0 mt-2">
            <li className="hover:scale-105 transition-all duration-200 hover:underline hover:decoration-blue-500 cursor-pointer">Home</li>
            <li className="hover:scale-105 transition-all duration-200 hover:underline hover:decoration-blue-500 cursor-pointer">About us</li>
            <li className="hover:scale-105 transition-all duration-200 hover:underline hover:decoration-blue-500 cursor-pointer">Contact us</li>
            <li className="hover:scale-105 transition-all duration-200 hover:underline hover:decoration-blue-500 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* ---- Right Section  ---- (20%) */}
        <div className="flex-[2] text-left flex flex-col">
          <p className="font-semibold">GET IN TOUCH</p>
          <ul className="list-none p-0 mt-2">
            <li className="hover:scale-105 transition-all duration-200 cursor-pointer" aria-label="Contact Phone Number">Phone: (123) 456-7890</li>
            <li className="hover:scale-105 transition-all duration-200 cursor-pointer" aria-label="Contact Email">Email: info@orionhealth.com</li>
            <li className="hover:scale-105 transition-all duration-200 cursor-pointer" aria-label="Contact Address">Address: 123 Health St, Wellness City, WA, 6222</li>
          </ul>
        </div>
      </div>

      {/* ---- Copyright Text ---- */}
      <div className="text-left mt-6 px-4">
        <hr className="border-gray-400 my-2" />
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ORION Health. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;