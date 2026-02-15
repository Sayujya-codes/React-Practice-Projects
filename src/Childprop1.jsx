import React from "react";

const Childprop1 = ({ count, onclickHandler }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={onclickHandler}>Increment</button>
    </div>
  );
};

export default Childprop1;
