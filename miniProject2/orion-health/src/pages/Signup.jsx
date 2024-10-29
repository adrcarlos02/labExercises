// src/pages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUserProfile } from '../assets/assets2'; // Import addUserProfile function

const Signup = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(true); // Track if user is signing up or logging in
  const navigate = useNavigate();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newUser = { email, name, password };
    if (addUserProfile(newUser)) { // Check if user was added successfully
      setUser(newUser); // Set the user state upon successful signup
      navigate(`/my-profile/${email}`); // Redirect to the user's profile
      // Reset form fields after successful signup
      setEmail('');
      setName('');
      setPassword('');
    } else {
      alert('User already exists. Please try a different email.');
    }
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-[#001f3f]" // Navy blue background
    >
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800">{isSigningUp ? 'Sign Up' : 'Login'} to Your Account</h2>
        
        <form className="space-y-4" onSubmit={onSubmitHandler}>
          {isSigningUp && (
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {isSigningUp ? 'Create Account' : 'Log In'}
          </button>
        </form>
        
        <div className="text-center">
          <p className="text-sm text-gray-600">
            {isSigningUp ? "Already have an account?" : "Don't have an account?"} 
            <button 
              onClick={() => setIsSigningUp(!isSigningUp)} 
              className="font-semibold text-blue-500 hover:underline"
            >
              {isSigningUp ? 'Login' : 'Sign up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;