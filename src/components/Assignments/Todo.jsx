import React, { useState } from "react";

const Todo = () => {
  const [items, setItems] = useState([]);
  const [task, setTask] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();
    setItems([...items, task]);
    setTask("");
  };
  return (
    <div>
      {items.map((i, idx) => (
        <ul key={idx}>
          <li>{i}</li>
        </ul>
      ))}
      <form>
        <input
          type="text"
          placeholder="Add New Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </form>
      <button onClick={handleAdd}>Add task</button>
    </div>
  );
};

export default Todo;
