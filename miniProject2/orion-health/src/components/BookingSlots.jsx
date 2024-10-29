import React, { useState } from 'react';

const BookingSlots = ({ docSlots }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const getAvailableDays = () => {
    const today = new Date();
    const availableDays = [];

    // Calculate available days and slots for the next week
    for (let i = 0; i < 7; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);
      const dayIndex = futureDate.getDay();

      availableDays.push({
        date: futureDate,
        slots: dayIndex === 0 ? [] : docSlots[i], // Using i directly for slots
        isOpen: dayIndex !== 0, // Clinic closed on Sundays
      });
    }

    return availableDays;
  };

  const availableDays = getAvailableDays();

  const handleDayClick = (index) => {
    setSelectedDay(selectedDay === index ? null : index);
    setSelectedSlot(null);
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
    // Additional booking logic can be implemented here
  };

  return (
    <div className="mt-4 font-medium text-gray-700 border border-gray-300 rounded-lg p-4 bg-white shadow-md">
      <p className="text-lg font-semibold">Booking Slots</p>

      {/* Days Section */}
      <div className="flex gap-2 py-2 overflow-x-auto no-scrollbar">
        {availableDays.map((day, index) => {
          const dayIndex = day.date.getDay();

          return (
            <div key={index} className="flex flex-col items-center">
              {day.isOpen ? (
                <button
                  onClick={() => handleDayClick(index)}
                  className={`w-[60px] h-[60px] flex flex-col items-center justify-center rounded-lg ${selectedDay === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} transition duration-200 hover:bg-gray-300 hover:scale-105 text-sm`}
                >
                  <span className="block">{daysOfWeek[dayIndex]}</span> {/* Day abbreviation */}
                  <span className="block">{day.date.getDate()}</span> {/* Day of the month */}
                  <span className="block">{day.date.toLocaleString('default', { month: 'short' })}</span> {/* Month abbreviation */}
                </button>
              ) : (
                <button className="w-[60px] h-[60px] flex flex-col items-center justify-center rounded-lg bg-gray-300 text-gray-500 cursor-not-allowed text-sm" disabled>
                  <span className="block">{daysOfWeek[dayIndex]}</span> {/* Day abbreviation */}
                  <span className="block">Closed</span>
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Slots Section */}
      {selectedDay !== null && (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {availableDays[selectedDay].slots.length > 0 ? (
            availableDays[selectedDay].slots.map((slot) => (
              <button
                key={slot.datetime}
                onClick={() => handleSlotClick(slot)}
                className={`border p-2 rounded-lg ${selectedSlot === slot ? 'bg-blue-200' : 'hover:bg-gray-100'}`}
              >
                {slot.time}
              </button>
            ))
          ) : (
            <p className="text-gray-500">No available slots for this day.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BookingSlots;