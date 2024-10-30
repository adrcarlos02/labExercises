import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col md:flex-row bg-maroon rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-5 md:mx-10'> {/* Adjusted my-20 to my-5 */}
      {/* ---- Left Side ---- */}
      <div className='flex-1 py-8 sm:py-4 md:py-8 lg:py-10 lg:pl-5' style={{ flex: '30%' }}>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
          <p>Invite Your Loved Ones to ORION Health!</p>
          <p className='mt-4 text-sm sm:text-base text-gray-300'>
          Help your family and friends access top-notch healthcare by creating an account for them. With ORION Health, staying healthy and connected has never been easier. Join us in prioritizing the well-being of those you care about!
          </p>
        </div>
        <button 
          onClick={() => { navigate('/login'); scrollTo(0, 0); }} 
          className='bg-white text-black px-4 py-2 mt-6 rounded-lg transition-all duration-300 transform hover:bg-gray-300 hover:scale-110'
        >
          Create Account
        </button>
      </div>

      {/* ---- Right Side ---- */}
      <div className='flex items-center justify-center' style={{ flex: '70%' }}>
        <img 
          src={assets.appointment_img} 
          alt='A doctor' 
          className='max-w-full h-auto pl-6 md:pt-0 pt-6' // Padding for smaller screens
        />
      </div>
    </div>
  );
};

export default Banner;