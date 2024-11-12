import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/categories", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCategories(response.data);
      } catch (err) {
        console.error("Error fetching categories:", err.response?.data || err.message);
      }
    };
  
    if (localStorage.getItem("token")) {
      fetchCategories();
    }
  }, []);

  return (
    <AppContext.Provider value={{ categories, loading, error }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;