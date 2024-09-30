import React from "react";
import Greeting from "./Greeting";
import BigCats from "./BigCats";
import Emoji from "./Emoji";
import "./App.css";

function App() {
  return (
    <>
      <Greeting name="John" className="greeting">
        Welcome to our Big Cat website!
      </Greeting>

      {/* Render The BigCats component */}
      <BigCats />

      {/* Render the Emoji component */}
      <Emoji />
    </>
  );
}

export default App;
