import { useRef, useState } from "react";

export default function SearchBar() {
  const timeoutRef = useRef(null);
  const [q, setQ] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQ(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      console.log("Searching for:", value);
    }, 500);
  };

  return (
    <>
      <input
        type="text"
        value={q}
        onChange={handleChange}
        placeholder="Search..."
      />
    </>
  );
}
