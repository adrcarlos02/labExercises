import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/auth/register", {
        name,
        email,
        mobileNumber,
        password,
      });
      alert("Registration successful! You can now log in.");
    } catch (error) {
      alert("Error during registration.");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Register</h2>
      <form onSubmit={handleRegister} className="mt-4">
        <div className="mb-4">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label>Mobile Number:</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;