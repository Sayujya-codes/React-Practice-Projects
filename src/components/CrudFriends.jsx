import React, { useState } from "react";

const CrudFriends = () => {
  const [friends, setFreinds] = useState(["Sayuj", "Ramesh", "Hari"]);
  const addOneFriend = () => {
    setFreinds([...friends, "New Friend"]);
  };

  const deleteFriend = () => {
    setFreinds(friends.filter((f) => f != "Sayuj"));
  };

  const updateFriend = () => {
    setFreinds(friends.map((f) => (f == "Sayuj" ? "Sayujya" : f)));
  };
  return (
    <div>
      {friends.map((i) => (
        <ul>
          <li key={Math.random}>{i}</li>
        </ul>
      ))}
      <button onClick={addOneFriend}>Add New Friend</button> <br /> <br />
      <button onClick={deleteFriend}>Delete a Friend</button> <br /> <br />
      <button onClick={updateFriend}>Update Friend</button>
    </div>
  );
};

export default CrudFriends;
