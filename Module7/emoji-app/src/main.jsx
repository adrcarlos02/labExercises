import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { EmojiProvider } from "./context/EmojiContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <EmojiProvider>
        <App />
      </EmojiProvider>
    </ThemeProvider>
  </React.StrictMode>
);