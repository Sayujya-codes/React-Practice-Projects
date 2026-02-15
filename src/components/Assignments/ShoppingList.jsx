import React, { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleAdd = () => {
    setItems([...items, { name, quantity }]);
    console.log(name);
    console.log(quantity);
  };
  return (
    <div>
      {items.map((i, idx) => (
        <ul key={idx}>
          <li>{i.name}</li>
          <li>{i.quantity}</li>
        </ul>
      ))}
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </form>
      <button onClick={handleAdd}>Add Item</button>
    </div>
  );
};

export default ShoppingList;
