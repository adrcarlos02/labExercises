import React from 'react';

function SingleCat({ name, latinName, image, deleteCat}) {
  return (
    <div style={styles.catItem}>
      <h2>{name}</h2>
      <p><i>{latinName}</i></p>
      <img src={image} alt={name} style={styles.image} />
      <button style={styles.deleteButton} onClick={deleteCat}>Delete</button> {/* Add delete button */}
    </div>
  );
}

const styles = {
  catItem: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    maxWidth: '300px',
    margin: '0 auto',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
  deleteButton: {
    marginTop: '10px',
    padding: '5px 10px',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default SingleCat;