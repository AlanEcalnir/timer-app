import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="container">
      <h1>Timer</h1>
      <div className="time">{seconds}s</div>
      <p className="status">{isRunning ? "Running" : "Paused"}</p>
      <div className="buttons">
        <button className="start" onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button className="pause" onClick={handlePause} disabled={!isRunning}>
          Pause
        </button>
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default App;