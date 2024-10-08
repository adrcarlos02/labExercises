// src/context/EmojiContext.jsx
import React, { createContext, useState, useContext } from "react";

const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy((prevMood) => !prevMood);
  };

  return (
    <EmojiContext.Provider value={{ isHappy, toggleMood }}>
      {children}
    </EmojiContext.Provider>
  );
};

export const useEmoji = () => {
  return useContext(EmojiContext);
};