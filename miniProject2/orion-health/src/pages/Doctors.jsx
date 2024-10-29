import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
    const { speciality } = useParams();
    const [filterDoc, setFilterDoc] = useState([]);
    const { doctors = [] } = useContext(AppContext);
    const navigate = useNavigate();
    
    // Accordion state
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    useEffect(() => {
        if (speciality && speciality !== 'all') {
            const filtered = doctors.filter(doc => {
                const docSpeciality = doc.speciality.toLowerCase();
                return docSpeciality === speciality.toLowerCase() || 
                       (speciality.toLowerCase() === 'pediatrician' && docSpeciality === 'pediatricians');
            });
            setFilterDoc(filtered.length > 0 ? filtered : doctors);
        } else {
            setFilterDoc(doctors);
        }
    }, [doctors, speciality]);

    const handleSpecialityClick = (spec) => {
        if (spec === 'All Doctors') {
            navigate('/doctors/all'); // Navigates to the same page with 'all' parameter
        } else {
            navigate(`/doctors/${spec}`);
        }
    };

    // Toggle accordion
    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <div className="pt-8"> {/* Added padding at the top */}
            <p className='text-gray-600 mb-4'>Select through our extensive list of quality healthcare providers.</p>
            <div className="flex flex-col lg:flex-row gap-5 mt-5">
                
                {/* Left column: Specialties list */}
                <div className="w-full lg:w-1/5 pr-2"> {/* 20% width */}
                    {/* Accordion Header */}
                    <div className="cursor-pointer mb-2 p-2 bg-gray-200 rounded" onClick={toggleAccordion}>
                        <p className="font-semibold">{isAccordionOpen ? 'Hide Specialties' : 'Show Specialties'}</p>
                    </div>
                    {isAccordionOpen && (
                        <div>
                            <p 
                                className={`cursor-pointer ${speciality === 'all' ? 'font-bold text-navy underline' : 'text-gray-700'} 
                                            transition-transform duration-300 transform hover:scale-105 mb-2`}
                                onClick={() => handleSpecialityClick('All Doctors')}
                            >
                                All Doctors
                            </p>
                            {['General Physician', 'Gynecologist', 'Dermatologist', 'Pediatrician', 'Neurologist'].map((spec, idx) => (
                                <p 
                                    key={idx} 
                                    className={`cursor-pointer transition-transform duration-300 transform hover:scale-105 mb-2 
                                                ${spec.toLowerCase() === speciality?.toLowerCase() ? 'font-bold text-navy underline' : 'text-gray-700'}`}
                                    onClick={() => handleSpecialityClick(spec)}
                                >
                                    {spec}
                                </p>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right column: Doctors grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full lg:w-4/5"> {/* 80% width */}
                    {filterDoc.length ? (
                        filterDoc.map((item, index) => (
                            <div
                                onClick={() => navigate(`/appointment/${item._id}`)}
                                key={index}
                                className="rounded-lg overflow-hidden shadow-md relative group cursor-pointer transition-transform duration-300 transform hover:scale-105"
                            >
                                <div className="relative w-full h-0" style={{ paddingBottom: "177.78%" }}>
                                    <img
                                        src={item.image || 'default-image.jpg'}
                                        alt={item.name}
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-white p-2 sm:p-4 flex flex-col items-center text-center">
                                    <p className="text-xs text-green-500">Available</p>
                                    <p className="text-xs sm:text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                                        {item.name}
                                    </p>
                                    <p className="text-xs">{item.speciality}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-full">No doctors available for this specialty.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Doctors;