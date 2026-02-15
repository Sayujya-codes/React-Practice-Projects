import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const btnClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {count}
      <button onClick={btnClick}>Click Me!</button>
    </div>
  );
};

export default Counter;
