import { useState, useRef } from "react";
// import { createLogicalAnd } from "typescript";

export default function Test2() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(0);
  
  const showRef = () => {
    alert(intervalRef.current)
  }

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
      // intervalRef.current = intervalRef.current  + 1;

    }, 2000);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Stopwatch</h1>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={showRef} >CLick me, {intervalRef.current} </button>
    </>
  );
}
