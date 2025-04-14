import { useState } from "react";

export default function UserRole() {
  const [role, setRole] = useState("admin");

  const toggleRole = () => {
    if (role === "admin") {
      setRole("user");
    } else if (role === "user") {
      setRole("guest");
    } else if (role === "guest") {
      setRole("admin");
    }
  };

  return (
    <div>
      <h1>
        {role === "admin"
          ? "Admin Panel "
          : role === "user"
          ? "User Dashboard"
          : role === "guest"
          ? "Guest View"
          : null}
      </h1>
      <button onClick={toggleRole}>Toggle Role</button>
    </div>
  );
}
