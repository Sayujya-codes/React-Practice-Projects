import React, { useState } from "react";

const FunctionasProp = () => {
  const [count, setCount] = useState(() => {
    const initial = 10;
    return initial;
  });
  const Increment = () => {
    setCount((prevCount) => prevCount + 1);
    // setCount(count + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={Increment}>Increment</button>
    </div>
  );
};

export default FunctionasProp;
