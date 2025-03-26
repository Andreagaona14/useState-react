import { useState } from 'react';
import './App.css';
import { Home } from './pages/Home';

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => setIsDarkMode(prev => !prev);

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>UseState</h1>
      <Home isDarkMode={isDarkMode} toggleMode={toggleMode} />
    </div>
  )
}