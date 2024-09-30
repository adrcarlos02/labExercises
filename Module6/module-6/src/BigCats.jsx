import React, { useState } from "react"; // Import useState
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";

// Initial array of cats with an additional image property
const initialCats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    family: "Acinonyx",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/320px-TheCheethcat.jpg",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    family: "Puma",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/480px-Mountain_Lion_in_Glacier_National_Park.jpg",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    family: "Panthera",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/480px-Standing_jaguar.jpg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    family: "Panthera",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/480px-African_leopard_male_%28cropped%29.jpg",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    family: "Panthera",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/480px-Lion_waiting_in_Namibia.jpg",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    family: "Panthera",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/480px-Irbis4.JPG",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    family: "Panthera",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/480px-Walking_tiger_female.jpg",
  },
];

function BigCats() {
  //  Set up state for managing the list of cats
  const [cats, setCats] = useState(initialCats);

  // Function to add a new cat
  const addCat = (newCat) => {
    setCats([...cats, { ...newCat, id: cats.length + 1 }]);
  };

  // Function to delete a cat
  const deleteCat = (id) => {
    setCats(cats.filter((cat) => cat.id !== id));
  };

  // Function to sort cats alphabetically by name
  const sortAlphabetically = () => {
    const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sortedCats);
  };

  // Function to reverse the current list of cats
  const reverseList = () => {
    const reversedCats = [...cats].reverse();
    setCats(reversedCats);
  };

  // Function to filter cats that belong to the "Panthera" family
  const filterPantheraFamily = () => {
    const pantheraCats = initialCats.filter((cat) => cat.family === "Panthera");
    setCats(pantheraCats);
  };

  // Function to reset the list back to the original
  const resetList = () => {
    setCats(initialCats);
  };

  return (
    <div>
      <h1>Big Cats List</h1>

 {/* Add the AddCatForm component below the cat list */}
 <AddCatForm addCat={addCat}> Feel free to add in your fave Big Cat on our list  </AddCatForm>{/* This ensures the form is rendered */}

      {/* Buttons for sorting, reversing, filtering, and resetting */}
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={sortAlphabetically}>
          Sort Alphabetically
        </button>
        <button style={styles.button} onClick={reverseList}>
          Reverse List
        </button>
        <button style={styles.button} onClick={filterPantheraFamily}>
          Show Panthera Family
        </button>
        <button style={styles.button} onClick={resetList}>
          Reset List
        </button>
      </div>

      {/* Render the list of cats */}
      <div className="cat-grid">
        {cats.map((cat) => (
          <SingleCat
            key={cat.id}
            name={cat.name}
            latinName={cat.latinName}
            image={cat.image}
            deleteCat={() => deleteCat(cat.id)} // Pass deleteCat as a prop
          />
        ))}
      </div>
    </div>

  );
}

// Styling for the buttons
const styles = {
  buttonContainer: {
    marginBottom: "2rem",
  },
  button: {
    margin: "0.5rem",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#61dafb",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default BigCats;
