import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section: Logo and Home Link */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="The Game Shelf"
              className="navbar-logo-img"
            />
            <span className="navbar-title">The Game Shelf</span>
          </Link>
        </div>

        {/* Right Section: Links and Logout */}
        <div className="navbar-right">
          {token && (
            <>
              <Link to="/borrow" className="navbar-link">
                Borrow Items
              </Link>
              <Link to="/profile" className="navbar-link">
                Profile
              </Link>
              <button onClick={handleLogout} className="btn-danger">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;