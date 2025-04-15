import { useRef } from "react";

export default function AutoFocusInput() {
  const inputref = useRef();
  const focus = () => {
    inputref.current.focus();
  };
  return (
    <>
      <input type="text" ref={inputref} />
      <button onClick={focus}>Focus on input</button>
    </>
  );
}
