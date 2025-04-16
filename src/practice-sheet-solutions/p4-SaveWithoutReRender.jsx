import { useState, useRef } from "react";

export default function Saver() {
  const inputRef = useRef();
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    setSubmittedValue(value);
    localStorage.setItem("savedInput", value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="Type here..." />
        <button type="submit">Submit</button>
      </form>
      <h2>Submitted Value: {submittedValue}</h2>
    </>
  );
}
