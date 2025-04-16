import { useMemo } from "react";
import { useState } from "react";

export default function Fibbo() {
  const [input, setInput] = useState(0);

  const fibbo = useMemo(() => {
    const n = parseInt(input);
    var fib = 1;
    for (let i = 1; i <= n; i++) {
      fib = fib * i;
    }

    return fib;
  }, [input]);

  return (
    <>
      <h1>
        Fibbonacci of {input} : {fibbo}
      </h1>

      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </>
  );
}
