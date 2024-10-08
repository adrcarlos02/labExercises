// src/App.jsx
import React from "react";
import { EmojiProvider } from "./context/EmojiContext"; // Import the EmojiProvider
import { ThemeProvider } from "./context/ThemeContext"; // Import your ThemeProvider
import Emoji from "./components/Emoji"; // Import your Emoji component


function App() {
  return (
    <ThemeProvider>
      <EmojiProvider>
        <Emoji />
      </EmojiProvider>
    </ThemeProvider>
  );
}

export default App;