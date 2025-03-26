import { useState, useEffect } from 'react'
import './App.css'

export const App = () => {
  //Estados
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const coloresAbsolutos = [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", 
    "#FF00FF", "#00FFFF", "#000000", "#FFFFFF", 
    "#808080", "#800000", "#808000", "#800080", 
    "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
  ]
  const [selectedColor, setSelectedColor] = useState(null);

  // Efecto para el temporizador
  useEffect(() => {
    let interval;
    
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  // Manejadores como funciones flecha
  const toggleMode = () => setIsDarkMode(prev => !prev);
  
  const handleLike = () => setLikes(prev => prev + 1);
  
  const handleDislike = () => setDislikes(prev => prev + 1);
  
  const generateColor = () => {
    const randomColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setSelectedColor(randomColor);
  };
  
  const startTimer = () => setIsTimerRunning(true);
  
  const stopTimer = () => {
    setIsTimerRunning(false);
    setSeconds(0);
  }

   

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`} style={{background : selectedColor}}>
  
      <h1>UseState</h1>

      <div className='card-1'>
        {/* Modo Oscuro/Claro */}
      <div className="section">
       <h2>Elige tu modo </h2>
        <button onClick={toggleMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Likes y Dislikes */}
      <div className="section">
        <h2>Tu like</h2>
        <button onClick={handleLike}>Like ({likes})</button>
        <button onClick={handleDislike}>Dislike ({dislikes})</button>
      </div>

      {/* Selector de Color */}
      <div className="section">
       <h2>Genera un color</h2>
        <button onClick={generateColor}>Genera el color</button>
        {selectedColor && (
          <div 
            className="color-box"
            style={{ backgroundColor: selectedColor }}
          />
        )}
      </div>
      </div>

      {/* Temporizador */}
      <div className="section-time">
        <h2>Tiempo</h2>
        <p>Segundos: {seconds}</p>
        <div className='btn-time'>
        <button onClick={startTimer} disabled={isTimerRunning}>
          Iniciar
        </button>
        <button onClick={stopTimer}>
          Reiniciar
        </button>
        </div>
        </div>
    </div>
  )
}
