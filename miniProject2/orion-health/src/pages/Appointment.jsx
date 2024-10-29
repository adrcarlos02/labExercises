import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import BookingSlots from "../components/BookingSlots";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currency } = useContext(AppContext);
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);

  // Fetch doctor information based on the ID from URL params
  const fetchDocInfo = () => {
    const doctor = doctors.find((doc) => doc._id === docId);
    setDocInfo(doctor || null);
  };

  // Generate available booking slots for the week
  const getAvailableSlots = () => {
    const today = new Date();
    const newSlots = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      const dayOfWeek = currentDate.getDay();

      // Skip Sunday (0)
      if (dayOfWeek === 0) {
        newSlots.push([]);
        continue;
      }

      const startHour = 9; // Start time: 9 AM
      const endHour = dayOfWeek === 6 ? 12 : 15; // End time: 12 PM for Saturday, 3 PM otherwise

      const timeSlots = [];
      for (let hour = startHour; hour < endHour; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          if (hour === 12) continue; // Skip 12 PM

          const slotTime = new Date(currentDate);
          slotTime.setHours(hour, minute);

          timeSlots.push({
            datetime: slotTime,
            time: slotTime.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          });
        }
      }

      newSlots.push(timeSlots);
    }

    setDocSlots(newSlots);
  };

  useEffect(() => {
    fetchDocInfo(); // Fetch doctor information when component mounts
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots(); // Get available slots once doctor info is loaded
    }
  }, [docInfo]);

  // Loading state while fetching doctor information
  if (!docInfo) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-gray-500">Loading doctor information...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-md sm:max-w-xl sm:mx-auto">
      {/* Doctor Info and Image Row */}
      <div className="flex flex-col sm:flex-row items-stretch gap-4">
        {/* Doctor Image */}
        <div className="w-full sm:w-1/3 h-auto">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={docInfo.image}
            alt={`${docInfo.name}'s profile`}
          />
        </div>

        {/* Doctor Info */}
        <div className="flex-1 border border-gray-400 rounded-lg p-4 sm:p-6 bg-white flex flex-col justify-between">
          <div>
            <p className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="Verified icon" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
            </div>
            <div className="mt-4">
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900">
                About <img src={assets.info_icon} alt="info icon" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
            </div>
          </div>
          <p className="text-gray-500 font-medium mt-4">
            Appointment fee: <span className="text-gray-600">{docInfo.fees} {currency}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots Row */}
      <div className="mt-4">
        <BookingSlots docSlots={docSlots} daysOfWeek={daysOfWeek} />
      </div>
    
    <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6"> Book an appointment </button>

    </div>
  );
};

export default Appointment;