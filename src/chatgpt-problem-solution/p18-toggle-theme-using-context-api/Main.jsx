import { ThemeProvider } from "./ThemeContextProvider";
import Toggler from "./ThemeToggle.jsx";
export default function Main() {
  return (
    <>
      <ThemeProvider>
        <Toggler />
      </ThemeProvider>
    </>
  );
}
