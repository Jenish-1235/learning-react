import { useCallback } from "react";

export default function CallbackOptimiser() {
  const func = useCallback(() => {
    console.log("I am good function");
  }, []);

  return (
    <>
      <Child myfunc={func} />
    </>
  );
}

export function Child({ myfunc }) {
  return (
    <>
      <button onClick={myfunc}>Click me</button>
    </>
  );
}
