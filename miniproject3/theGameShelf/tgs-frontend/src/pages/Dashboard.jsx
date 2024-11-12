import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [borrowedItems, setBorrowedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [photo, setPhoto] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUsers(response.data);
    } catch (err) {
      console.error("Failed to fetch users");
    }
  };

  const fetchBorrowedItems = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:5001/api/users/${userId}/borrowed-items`,
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

  const handleUserClick = (user) => {
    setSelectedUser(user);
    fetchBorrowedItems(user.id);
  };

  const handlePhotoUpload = async (e) => {
    e.preventDefault();
    if (!photo || !selectedItem) {
      alert("Please select an item and photo to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("itemPhoto", photo);

    try {
      await axios.put(
        `http://localhost:5001/api/items/${selectedItem.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Item photo updated successfully!");
    } catch (err) {
      alert("Failed to update item photo.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex p-8">
      {/* Users List */}
      <div className="w-1/3 bg-gray-100 p-4 rounded">
        <h3 className="text-xl font-bold mb-4">Users</h3>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className="p-2 cursor-pointer hover:bg-gray-200 rounded"
              onClick={() => handleUserClick(user)}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      {/* User Details */}
      <div className="w-2/3 p-4">
        {selectedUser ? (
          <>
            <h3 className="text-xl font-bold">Manage User</h3>
            <p>
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>Mobile:</strong> {selectedUser.mobileNumber}
            </p>

            <h4 className="mt-4 text-lg font-bold">Borrowed Items</h4>
            <ul>
              {borrowedItems.map((item) => (
                <li
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="cursor-pointer hover:underline"
                >
                  {item.title}
                </li>
              ))}
            </ul>

            {/* Photo Upload */}
            {selectedItem && (
              <form onSubmit={handlePhotoUpload} className="mt-4">
                <h5 className="text-lg font-bold">
                  Update Photo for {selectedItem.title}
                </h5>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  className="mb-2"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Upload Photo
                </button>
              </form>
            )}
          </>
        ) : (
          <p>Select a user to manage.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;