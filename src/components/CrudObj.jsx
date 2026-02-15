import React, { useState } from "react";

const CrudObj = () => {
  const [movies, setMovies] = useState({
    title: "Random Movie",
    rating: "3",
  });

  const [food, setFood] = useState([
    { id: 1, name: "Momo", rating: 9 },
    { id: 2, name: "Pizza", rating: 8 },
    { id: 3, name: "Coffee", rating: 7 },
  ]);

  const updateRating = () => {
    // const changeRating = {
    //   ...movies,
    //   rating: "5",
    // };
    // setMovies(changeRating);
    setMovies({ ...movies, rating: "5" });
  };

  const updateFood = () => {
    setFood(food.map((f) => (f.id === 1 ? { ...food, name: "Momos" } : f)));
  };
  return (
    <>
      <div>
        <h1>{movies.title}</h1>
        <p>{movies.rating}</p>
        <button onClick={updateRating}>Update Rating</button>
      </div>

      <div>
        {food.map((m) => (
          <ul>
            x <li>{m.name}</li>
          </ul>
        ))}
        <button onClick={updateFood}>Update Food</button>
      </div>
    </>
  );
};

export default CrudObj;
