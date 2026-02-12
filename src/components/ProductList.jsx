import React from "react";

const ProductList = () => {
  const users = [
    { id: "1", name: "Phone", price: "699" },
    { id: "2", name: "Laptop", price: "1200" },
    { id: "3", name: "Headphones", price: "199" },
  ];
  return (
    <div>
      {users.map(({ id, name, price }) => (
        <ul key={id}>
          <li>{id}</li>
          <li>{name}</li>
          <li>${price}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
