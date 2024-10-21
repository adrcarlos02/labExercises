import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const MainDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Meet our Main Doctors</h1>
      <p className="text-lg mb-6 text-center">Select through our extensive list of trusted doctors.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {doctors.slice(0, 10).map((item, index) => (
          <div 
            onClick={() => navigate(`/appointment/${item._id}`)} 
            key={index} 
            className="border rounded-lg overflow-hidden shadow-md h-80 relative group cursor-pointer transition-transform duration-300 transform hover:scale-105"
          >
            <div className="relative w-full h-0" style={{ paddingBottom: '177.78%' }}>
              <img 
                src={item.image} 
                alt={item.name} 
                className="absolute top-0 left-0 w-full h-full object-cover" 
              />
            </div>
            {/* Uniform details section with center alignment */}
            <div className="absolute bottom-0 left-0 w-full bg-white p-4 flex flex-col items-center text-center h-24">
              <p className="text-[12px] font-medium whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</p>
              <p className="text-xs">{item.speciality}</p>
              <p className="text-xs text-green-500">Available</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button  
        onClick={() => {navigate('/doctors'); scrollTo(0,0)}}
        className="mt-4 inline-flex items-center bg-white text-black px-4 sm:px-6 py-3 rounded-lg border hover:bg-gray-300 transition-all duration-200 transform hover:scale-105">
          more
        </button>
      </div>
    </div>
  );
};

export default MainDoctors;