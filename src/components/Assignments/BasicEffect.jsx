import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("Change in Components!");
  }, []);
  return <div></div>;
};

export default BasicEffect;
