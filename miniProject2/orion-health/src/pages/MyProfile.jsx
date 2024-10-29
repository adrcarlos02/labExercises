// src/pages/MyProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../assets/assets2'; // Adjust the import path if necessary

const MyProfile = () => {
  const { userId } = useParams(); // Get userId from the URL
  const userProfile = getUserProfile(userId); // Fetch user profile based on userId

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">My Profile</h2>
        <div className="mt-6 space-y-4">
          {userProfile ? (
            <>
              <p className="text-gray-700">
                <strong>Name:</strong> {userProfile.name || 'N/A'}
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> {userProfile.email || 'N/A'}
              </p>
            </>
          ) : (
            <p className="text-gray-700">No profile found. Please log in.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;