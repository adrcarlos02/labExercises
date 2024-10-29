import React, { useRef } from 'react';
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import MainDoctors from '../components/MainDoctors';
import Banner from '../components/Banner';

const Home = () => {
  const specialityMenuRef = useRef(null); // Create a ref for SpecialtyMenu

  return (
    <div>
      <Header specialityMenuRef={specialityMenuRef} /> {/* Pass ref to Header */}
      <SpecialityMenu ref={specialityMenuRef} /> {/* Use ref here */}
      <MainDoctors />
      <Banner />
    </div>
  );
};

export default Home;