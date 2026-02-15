import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "Sayujya",
    age: 23,
  });
  const [updatedValue, setUpdatedValue] = useState("");

  const handleUpdate = () => {
    {
      user.id === 1 ? setUser({ ...user, age: updatedValue }) : user.age;
    }
  };

  return (
    <div>
      {user.age}

      <form>
        <input
          type="text"
          placeholder="Update Age"
          value={updatedValue}
          onChange={(e) => setUpdatedValue(e.target.value)}
        />
      </form>
      <button onClick={handleUpdate}>Update Age</button>
    </div>
  );
};

export default Profile;
