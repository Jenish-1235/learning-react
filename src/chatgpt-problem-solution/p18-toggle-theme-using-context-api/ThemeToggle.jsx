import { useContext } from "react";
import ThemeContext from "./ThemeContextProvider.jsx";

export default function Toggler() {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          backgroundColor: theme === "0" ? "#f0f0f0" : "#222",
          color: theme === "0" ? "#222" : "#f0f0f0",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Current Theme: {theme}</h1>
        <button onClick={toggle}>Toggle Theme</button>
      </div>
    </>
  );
}
