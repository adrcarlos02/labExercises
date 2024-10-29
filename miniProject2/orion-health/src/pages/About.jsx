import React, { useState } from 'react';
import { assets } from '../assets/assets';
import SpecialtyBanner from '../components/SpecialtyBanner'; 
import BannerGeneralPhysican from '../components/BannerGeneralPhysican'; 
import BannerMaternalHealth from '../components/BannerMaternalHealth';
import BannerSkinHealth from '../components/BannerSkinHealth';
import BannerChildHealth from '../components/BannerChildHealth';
import BannerNeurology from '../components/BannerNeurology';

const About = () => {
  const [speciality, setSpeciality] = useState('All Doctors'); 

  const handleSpecialityClick = (selectedSpeciality) => {
    setSpeciality(selectedSpeciality);
  };

  // Define the banners with corresponding components
  const banners = [
    { speciality: 'General Physician', component: <BannerGeneralPhysican /> },
    { speciality: 'Gynecologist', component: <BannerMaternalHealth /> },
    { speciality: 'Dermatologist', component: <BannerSkinHealth /> },
    { speciality: 'Pediatrician', component: <BannerChildHealth /> },
    { speciality: 'Neurologist', component: <BannerNeurology /> },
  ];

  // Service descriptions
  const services = [
    {
      title: 'General Health',
      description: 'Providing comprehensive health check-ups and primary care. Our general physicians are dedicated to diagnosing and treating a wide range of medical conditions. They offer preventive services, including routine screenings and health education, to help you maintain your overall well-being. With a focus on personalized care, our team collaborates with specialists when needed, ensuring you receive integrated healthcare tailored to your specific needs.',
    },
    {
      title: 'Maternal Health',
      description: 'Specialized in gynecological care and maternal health. Our maternal health services encompass preconception counseling, prenatal care, and postpartum support. We prioritize the health of both mother and baby, offering education and resources to navigate the journey of pregnancy and motherhood. Our compassionate team is here to address any concerns, ensuring a safe and healthy experience for every family.',
    },
    {
      title: 'Skin Health',
      description: 'Expert dermatological services for skin wellness. Our dermatology team provides comprehensive skin care, including treatment for acne, eczema, psoriasis, and skin cancer screenings. We utilize advanced diagnostic techniques and cutting-edge treatments to address a wide range of skin concerns. With a focus on preventive care, we also offer education on skincare routines and sun protection to maintain healthy skin at all ages.',
    },
    {
      title: 'Child Health',
      description: 'Pediatric care for children\'s health and wellness. Our dedicated team of pediatricians provides comprehensive medical care, including regular check-ups, vaccinations, and developmental assessments. We focus on preventive care to ensure healthy growth and development. Additionally, we offer specialized services for common childhood illnesses, chronic conditions, and behavioral health concerns, ensuring that your child receives the best possible care in a nurturing environment.',
    },
    {
      title: 'Neurology',
      description: 'Neurological care and recovery services for well-being. Our neurology team specializes in diagnosing and treating disorders affecting the brain and nervous system. We offer comprehensive evaluations, advanced diagnostic testing, and personalized treatment plans for conditions such as epilepsy, migraines, and neurodegenerative diseases. With a focus on rehabilitation, we provide tailored therapies to enhance recovery and improve quality of life.',
    },
  ];

  return (
    <div className="flex flex-col items-center gap-8 p-6 bg-gray-100 text-gray-800">
      {/* Heading Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">ABOUT <span className="text-navy">US</span></h1>
      </div>

      {/* Image and Description Section */}
      <div className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        <img 
          src={assets.about_image} 
          alt='Clinic overview' 
          className="w-full sm:w-1/2 object-cover h-64 sm:h-auto"
        />
        <div className="p-6 text-gray-700 sm:w-1/2 space-y-4">
          <p className="mb-4">
            <strong className="text-lg">Our Commitment:</strong> At Orion Health, we are dedicated to your well-being with quality healthcare services that meet your unique needs, from routine check-ups to specialized treatments. Our dedicated team includes general physicians, dermatologists, gynecologists, pediatricians, and neurologists, each bringing expert care to help you achieve and maintain a healthy life. 
          </p>
          <p>
            <strong className="text-lg">Our Goal:</strong> Our specialists provide a wide range of services. General physicians focus on preventive care, dermatologists offer skin health and cosmetic treatments, and gynecologists support women’s health at every stage. For families, our pediatricians ensure comprehensive child health care, and our neurologists deliver advanced treatments for complex neurological conditions.
          </p>
        </div>
      </div>

      {/* Specialty Banner Section */}
      <div className="w-full max-w-4xl">
        <SpecialtyBanner 
          banners={banners} 
          handleSpecialityClick={handleSpecialityClick} 
          speciality={speciality} 
        />
      </div>

      {/* Services Section for Small Screens */}
      <div className="block md:hidden p-4 bg-gray-800 text-white w-full max-w-4xl rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Services:</h3>
        {services.map((service, index) => (
          <div key={index} className="mb-4">
            <h4 className="font-semibold">{service.title}</h4>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;