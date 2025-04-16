import { useCallback } from "react";

export default function Toggler() {
  const toggler = useCallback(() => {
    console.log("I am toggled");
  }, []);

  return (
    <>
      <button onClick={toggler} />
    </>
  );
}
