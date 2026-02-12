import React from "react";

const ProductInfo = () => {
  const list = [
    {
      name: "Laptop test",
      price: "$1200",
      avaiablity: "Instock",
    },
  ];
  return (
    <div>
      {list.map((i, index) => (
        <ul key={index}>
          <li>{i.name}</li>
          <li>{i.price}</li>
          <li>{i.avaiablity}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductInfo;
