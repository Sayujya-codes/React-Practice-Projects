import React, { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    <p>{count}</p>;
    console.log("Incremented by one");
  }, [count]);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => {
          alert("just test");
        }}
      >
        Just click
      </button>
    </div>
  );
};

export default CounterEffect;
