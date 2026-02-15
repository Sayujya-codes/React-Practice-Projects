import React from "react";

const Childprop2 = ({ count, onclickHandler }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={onclickHandler}>Increment</button>
    </div>
  );
};

export default Childprop2;
