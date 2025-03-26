import { useState, useEffect } from 'react';

export const Time = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setSeconds(s => s + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="section-time">
      <h2>Tiempo</h2>
      <p>Segundos: {seconds}</p>
      <div className='btn-time'>
        <button onClick={() => setIsRunning(true)} disabled={isRunning}>Iniciar</button>
        <button onClick={() => { setIsRunning(false); setSeconds(0); }}>Reiniciar</button>
      </div>
    </div>
  )
}