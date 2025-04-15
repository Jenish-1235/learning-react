import { useCallback } from "react";

export default function Parent() {
  const counter = useCallback(() => {
    console.log("I am same function");
  }, []);

  return (
    <>
      <Child myFunc={counter} />
    </>
  );
}

function Child({ myFunc }) {
  return (
    <>
      <button onClick={myFunc}> Click me </button>
    </>
  );
}
