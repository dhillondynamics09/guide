import React, { useState, useEffect, useRef } from 'react';

export default function Timer() {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(60);
  const timerId = useRef(null);

  useEffect(() => {
    if (secondsLeft === 0) {
      clearInterval(timerId.current);
    }
  }, [secondsLeft]);

  function startTimer() {
    if (secondsLeft > 0) return;
    setSecondsLeft(inputMinutes * 60);
    timerId.current = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerId.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  function resetTimer() {
    clearInterval(timerId.current);
    setSecondsLeft(0);
  }

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const rotation = ((inputMinutes * 60 - secondsLeft) / (inputMinutes * 60)) * 360;

  return (
    <div className="timer">
      <h3>Study Timer</h3>
      <input
        type="number"
        min="1"
        max="180"
        value={inputMinutes}
        onChange={e => setInputMinutes(Number(e.target.value))}
        disabled={secondsLeft > 0}
      /> minutes
      <div style={{ margin: '1rem' }}>
        <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 1s linear' }}>
          <polygon points="50,10 90,90 10,90" fill="#c42c2e" />
        </svg>
      </div>
      <div style={{ fontSize: '1.5rem' }}>
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>
      <button onClick={startTimer} disabled={secondsLeft > 0} style={{ marginRight: '1rem' }}>Start</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}