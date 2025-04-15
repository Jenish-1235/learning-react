import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function HookMaster() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timerRef = useRef();

  const doubleTimer = useMemo(() => {
    return counter * 2;
  }, [counter]);

  const resetFunc = useCallback(() => {
    setCounter(0);
  }, []);

  return (
    <>
      <h1 ref={timerRef}>{counter}</h1>
      <h2>{doubleTimer}</h2>
      <ResetButton myFunc={resetFunc} />
    </>
  );
}

function ResetButton({ myFunc }) {
  return (
    <>
      <button onClick={myFunc}>Reset Button</button>
    </>
  );
}
