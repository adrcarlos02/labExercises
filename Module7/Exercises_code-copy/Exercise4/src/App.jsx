// src/App.jsx
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BitcoinRates from "./components/BitcoinRates";
import "./App.css";

function App() {
  return (
    <Router>
      <div id="root">
        {/* Fixed navbar */}
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <NavLink exact to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/bitcoin-rates" className={({ isActive }) => (isActive ? "active" : "")}>
                Bitcoin Rates
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Main content area */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bitcoin-rates" element={<BitcoinRates />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;