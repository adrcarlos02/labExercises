import React, { useState } from 'react';

function AddCatForm({ addCat, children}) {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCat = { name, latinName, image };
    addCat(newCat);
    setName(''); // Clear the input fields
    setLatinName('');
    setImage('');
  };

  return (
    <div>
      {/* Render any children passed from the parent */}
      <p>{children}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Latin Name:</label>
          <input
            type="text"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
}

export default AddCatForm;