import React from 'react';

function SingleCat({ name, latinName, image }) {
  return (
    <div style={styles.catItem}>
      <h2>{name}</h2>
      <p><i>{latinName}</i></p>
      <img src={image} alt={name} style={styles.image} />
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
};

export default SingleCat;