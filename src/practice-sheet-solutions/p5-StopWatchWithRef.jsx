import { useRef, useState } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current !== null) return; // prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  };

  return (
    <>
      <h1>Timer: {time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
