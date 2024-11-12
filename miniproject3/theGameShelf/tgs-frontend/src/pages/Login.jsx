import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [identifier, setIdentifier] = useState(""); // Change from email to identifier
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/auth/login", {
        identifier, // Use identifier for email or mobile number
        password,
      });

      const { token, role } = response.data;
      localStorage.setItem("token", token); // Save token in localStorage
      localStorage.setItem("role", role); // Save role in localStorage
      navigate("/borrow"); // Redirect to Borrow Items page
    } catch (err) {
      setError("Invalid email or mobile number, or password.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Side: Banner */}
          <div className="hidden md:block">
            <img
              src="/assets/banner-games.jpg" // Replace with your banner photo path
              alt="Games Banner"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Login Form */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Login</h2>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="identifier"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email or Mobile Number
                </label>
                <input
                  type="text"
                  id="identifier"
                  value={identifier} // Update to identifier
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
                  placeholder="Enter your email or mobile number"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="text-indigo-600 font-medium hover:underline">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;