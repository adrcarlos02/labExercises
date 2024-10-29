import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currency } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    docInfo && (
      <div className="flex flex-col sm:flex-row items-start gap-4 bg-white p-4 rounded-lg shadow-md">
        {/* Doctor Image */}
        <div className="w-64 h-64">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={docInfo.image}
            alt="doctor's image"
          />
        </div>

        {/* Doctor Info */}
        <div className="flex-1 border border-gray-400 rounded-lg p-4 sm:p-8 bg-white flex flex-col justify-between h-64">
          <div>
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name} <img className="w-5" src={assets.verified_icon} alt="Verified icon" />
            </p>

            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
            </div>

            {/* About Section */}
            <div className="mt-4">
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900">
                About <img src={assets.info_icon} alt="info icon" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
            </div>
          </div>

          {/* Appointment Fee */}
          <p className="text-gray-500 font-medium mt-4">
            Appointment fee: <span className="text-gray-600">{docInfo.fees}{currency}</span>
          </p>
        </div>
      </div>
    )
  );
};

export default Appointment;