import { LikeDislike } from '../ui/LikeDislike';
import { ColorPicker } from '../ui/ColorPicker';
import { Timer } from '../ui/Timer';

export const Home = ({ isDarkMode, toggleMode }) => {
  return (
    <div className='card-1'>
      <div className="section">
        <h2>Elige tu modo</h2>
        <button onClick={toggleMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <LikeDislike />
      <ColorPicker />
      <Timer />
    </div>
  )
}