import React, { useState } from "react";

function Emoji() {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy((prevIsHappy) => !prevIsHappy);
  };

  return (
    <div style={styles.container}>
      <h2>What is your mood today?</h2>
      <span style={styles.emoji}>{isHappy ? "😊" : "😢"}</span>

      <button style={styles.button} onClick={toggleMood}>
        ChangeMood
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  emoji: {
    fontSize: '4rem', // Large size for emoji
    marginBottom: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1.25rem',
    cursor: 'pointer',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
  },
};

export default Emoji;
