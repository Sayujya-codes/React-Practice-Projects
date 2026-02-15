import React, { useState } from "react";
import Childprop1 from "./Childprop1";
import ChildProp2 from "./ChildProp2";

const Parentprop = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Childprop1
        count={count}
        onclickHandler={() => {
          setCount(count + 1);
        }}
      ></Childprop1>

      <ChildProp2
        count={count}
        onclickHandler={() => {
          setCount(count + 1);
        }}
      />
    </div>
  );
};

export default Parentprop;
