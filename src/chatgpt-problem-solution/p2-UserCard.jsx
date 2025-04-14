import React from "react";
export default function UserCard({ name, email }) {
  return (
    <>
      <h3>{name}</h3>
      <p>Email : {email}</p>
    </>
  );
}
