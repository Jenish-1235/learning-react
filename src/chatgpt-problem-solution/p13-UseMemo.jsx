import { useMemo, useState } from "react";

export default function Search({ users }) {
  const [query, setQuery] = useState("");

  const filteredUsers = useMemo(() => {
    var usersResult = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].name.startsWith(query)) {
        usersResult.push(users[i]);
      }
    }
    return usersResult;
  }, [query, users]);

  return (
    <>
      <input
        type="search"
        name="search"
        id="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <ul>
        {filteredUsers.length == 0
          ? users.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })
          : filteredUsers.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
      </ul>
    </>
  );
}
