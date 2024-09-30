import React from 'react';
import Greeting from './Greeting';
import BigCats from './BigCats';
import './App.css'; 


function App() {
  return (
    <>
      <Greeting name="John" className="greeting">
        Welcome to our Big Cat website!
      </Greeting>

      {/* Render The BigCats component */}
      <BigCats />
    </>
  );
}

export default App;