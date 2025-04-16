import { useMemo } from "react";
import { useState } from "react";

export default function FilteredList({ users }) {
  const [q, setQuery] = useState("");

  const filterResult = useMemo(() => {
    if (q == "") {
      return users;
    } else {
      return users.filter((user) => user.includes(q));
    }
  }, [q, users]);

  return (
    <>
      <input
        type="text"
        value={q}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <ul>
        {filterResult.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}
