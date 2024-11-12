import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [borrowedItems, setBorrowedItems] = useState([]);
  const [photo, setPhoto] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(response.data);
    } catch (err) {
      console.error("Failed to fetch user profile");
    }
  };

  const fetchBorrowedItems = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/users/me/borrowed-items",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setBorrowedItems(response.data);
    } catch (err) {
      console.error("Failed to fetch borrowed items");
    }
  };

  const handlePhotoUpload = async (e) => {
    e.preventDefault();
    if (!photo) {
      alert("Please select a photo to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("profilePhoto", photo);

    try {
      await axios.put("http://localhost:5001/api/users/me", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Profile photo updated successfully!");
      fetchProfile();
    } catch (err) {
      alert("Failed to update profile photo.");
    }
  };

  const handleReturn = async (itemId) => {
    try {
      await axios.post(
        `http://localhost:5001/api/items/${itemId}/return`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Item returned successfully!");
      fetchBorrowedItems();
    } catch (err) {
      alert("Failed to return item.");
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchBorrowedItems();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">My Profile</h2>
      {user && (
        <div>
          <img
            src={user.profilePhoto || "default-profile.jpg"}
            alt="Profile"
            className="w-32 h-32 rounded-full mt-4"
          />
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Mobile:</strong> {user.mobileNumber}
          </p>

          {/* Photo Upload Form */}
          <form onSubmit={handlePhotoUpload} className="mt-4">
            <label className="block mb-2">Upload Profile Photo:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="mb-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Update Photo
            </button>
          </form>
        </div>
      )}

      <h3 className="text-2xl font-bold mt-6">Borrowed Items</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {borrowedItems.map((item) => (
          <div key={item.id} className="p-4 bg-white shadow rounded">
            <h4>{item.title}</h4>
            <button
              onClick={() => handleReturn(item.id)}
              className="bg-red-500 text-white px-4 py-2 mt-2 rounded hover:bg-red-600"
            >
              Return
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;