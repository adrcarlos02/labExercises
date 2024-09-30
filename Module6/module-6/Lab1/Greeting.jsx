import React from 'react';

function Greeting({name, children}) {
  return (
    <>
    <h1>
      {name? `Hello ${name}` : `Hello World`} 
      </h1>
      {/* Name as a prop. If name exists, display a personalized greeting (e.g., “Hello John”). If no name is passed, it defaults to “Hello World”.  */}
    {children && <p>{children}</p>}
    </>
  );
}

export default Greeting;