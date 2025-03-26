import { useState } from 'react';

export const Color = () => {
  const colores = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];
  const [color, setColor] = useState(null);

  return (
    <div className="section">
      <h2>Genera un color</h2>
      <button onClick={() => setColor(colores[Math.floor(Math.random() * colores.length)])}>
        Genera el color
      </button>
      {color && <div className="color-box" style={{ backgroundColor: color }} />}
    </div>
  )
}