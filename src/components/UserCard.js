import React from "react";

function UserCard({ name, age }) {
  return (
    <div className="user-card">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

export default UserCard;
