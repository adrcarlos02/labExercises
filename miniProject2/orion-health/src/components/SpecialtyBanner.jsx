import React, { useState } from 'react';

const SpecialtyBanner = ({ banners, handleSpecialityClick, speciality }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next banner
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  // Function to go to the previous banner
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative min-h-[600px] overflow-hidden rounded-lg"> {/* Increased height here */}
        {banners.map((banner, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            role="tabpanel"
            aria-hidden={index !== currentIndex}
          >
            <div className="flex items-center justify-center h-full">
              {banner.component}
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {banners.map((_, index) => (
          <button 
            key={index}
            type="button" 
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentIndex ? 'bg-navy' : 'bg-gray-300 hover:bg-gray-400'}`} 
            aria-current={index === currentIndex ? 'true' : 'false'} 
            aria-label={`Slide ${index + 1}`} 
            onClick={() => setCurrentIndex(index)} 
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button 
        type="button" 
        className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-full px-4 transform -translate-y-1/2 cursor-pointer group focus:outline-none" 
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button 
        type="button" 
        className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-full px-4 transform -translate-y-1/2 cursor-pointer group focus:outline-none" 
        onClick={handleNext}
        aria-label="Next Slide"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default SpecialtyBanner;