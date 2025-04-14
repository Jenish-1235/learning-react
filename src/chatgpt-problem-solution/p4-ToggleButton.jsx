import React, { useState } from "react";

export default function ToggleButton() {
  const [isOn, setState] = useState(true);

  const handleClick = () => {
    setState((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
    </>
  );
}
