import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    dataFetch = async () => {
      const dataFeteched = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = dataFeteched.json();
    };
  }, []);
  return (
    <div>
      {data.map((i, id) => {
        <ul key={id}>
          <li>{i.title}</li>
        </ul>;
      })}
    </div>
  );
};

export default FetchData;

// https://jsonplaceholder.typicode.com/posts
