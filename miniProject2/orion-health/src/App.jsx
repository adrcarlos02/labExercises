// src/App.js
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Contact from './pages/Contact';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyProfile from './pages/MyProfile'; // Import MyProfile component
import './index.css'; // Ensure this line is present

const App = () => {
  const [user, setUser] = useState(null); // User state to manage logged-in user

  const PrivateRoute = ({ element }) => {
    return user ? element : <Navigate to="/login" />;
  };

  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<PrivateRoute element={<Doctors />} />} />
        <Route path='/doctors/:speciality' element={<PrivateRoute element={<Doctors />} />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<Signup setUser={setUser} />} />
        {/* Updated dynamic route for user profile */}
        <Route path='/my-profile/:userId' element={<PrivateRoute element={<MyProfile />} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-appointments' element={<PrivateRoute element={<MyAppointments />} />} />
        <Route path='/appointment/:docId' element={<PrivateRoute element={<Appointment />} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;