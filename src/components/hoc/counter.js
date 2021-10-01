import React, { useState } from 'react';

const counter = (Component) => {
  return () => {
    //Magija
    //Hooks
    //---state
    const [count, setCount] = useState(0);
    //Custom Functions
    const increment = () => setCount((prev) => prev + 1);
    return <Component count={count} increment={increment} />;
  };
};
export default counter;
