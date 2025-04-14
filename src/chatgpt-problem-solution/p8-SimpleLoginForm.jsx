import { useState } from "react";

export default function SimpleLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    alert(`Logged in with\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
