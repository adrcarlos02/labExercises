import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import generalPhysicianImage from '../assets/BannerGeneralPhysican.png';

const BannerGeneralPhysician = () => (
  <Link to="/doctors/General Physician" className="relative w-full h-0 pb-[75%] rounded-lg shadow-lg overflow-hidden group"> {/* Wrap in Link */}
    <img 
      src={generalPhysicianImage} 
      alt="General Physician" 
      className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 ease-in-out hover:opacity-80" 
      style={{ aspectRatio: '4 / 3' }} 
    />
    <div className="absolute bottom-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-gray-800 opacity-75 p-5 md:p-7 lg:p-9">
      {/* Separate div for h2 */}
      <div className="flex justify-center items-center h-1/2">
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-semibold text-center pt-10 md:pt-20">
          General Health
        </h2>
      </div>
      {/* Separate div for p, hidden on small screens */}
      <div className="flex justify-center items-center mt-0">
        <p className="text-white text-sm md:text-base lg:text-lg text-center hidden md:block opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"> {/* Hidden on small screens */}
          Providing comprehensive health check-ups and primary care. Our general physicians are dedicated to diagnosing and treating a wide range of medical conditions. They offer preventive services, including routine screenings and health education, to help you maintain your overall well-being. With a focus on personalised care, our team collaborates with specialists when needed, ensuring you receive integrated healthcare tailored to your specific needs.
        </p>
      </div>
    </div>
  </Link>
);

export default BannerGeneralPhysician;