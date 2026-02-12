import React from "react";

const ProductInfo = () => {
  const products = [
    {
      name: "Laptop",
      price: "$1200",
      availablity: "In Stock",
    },
  ];
  return (
    <div>
      {products.map((i) => (
        <ul key={Math.random}>
          <li>{i.name}</li>
          <li>{i.price}</li>
          <li>{i.availablity}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductInfo;
