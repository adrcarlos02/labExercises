import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const BorrowItems = () => {
  const { categories = [] } = useContext(AppContext); // Categories from context
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemsPerPage = 5; // Items per page

  // Fetch items from backend
  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:5001/api/items", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setItems(response.data);
    } catch (err) {
      setError("Failed to fetch items.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Filter items by selected category
  const filteredItems = items.filter((item) =>
    selectedCategory === "All" ? true : item.categoryName === selectedCategory
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handleBorrow = async (itemId) => {
    try {
      await axios.post(
        `http://localhost:5001/api/items/${itemId}/borrow`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Item borrowed successfully!");
      fetchItems(); // Refresh items
    } catch (err) {
      alert("Failed to borrow item. Please try again.");
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Borrow Items</h2>

      {/* Loading and Error States */}
      {loading && <p>Loading items...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Filter by Category */}
      <div className="my-4">
        <label htmlFor="categories" className="mr-2 font-medium">
          Filter by Category:
        </label>
        <select
          id="categories"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Items List */}
      {currentItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentItems.map((item) => (
            <div key={item.id} className="p-4 bg-white shadow rounded">
              <img
                src={item.photo || "/default-image.jpg"} // Default image if no photo
                alt={item.title}
                className="h-40 w-full object-cover rounded"
              />
              <h3 className="text-xl font-bold mt-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="mt-2">
                <strong>Status:</strong>{" "}
                <span
                  className={
                    item.status === "available"
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {item.status}
                </span>
              </p>
              {item.status === "available" && (
                <button
                  onClick={() => handleBorrow(item.id)}
                  className="bg-green-500 text-white px-4 py-2 mt-2 rounded hover:bg-green-600"
                >
                  Borrow
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        !loading && <p>No items available for this category.</p>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-4 flex justify-center items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-400"
            }`}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-400"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BorrowItems;