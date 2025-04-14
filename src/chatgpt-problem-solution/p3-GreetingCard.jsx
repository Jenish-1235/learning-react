import React from "react";

export default function GreetingCard({ name, message, from }) {
  return (
    <>
      <h2>{name}</h2>
      <p>
        <i>"{message}"</i>
      </p>
      <p>
        <span>- from {from}</span>
      </p>
    </>
  );
}
