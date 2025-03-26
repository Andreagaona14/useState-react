import { Like } from "../UI/Like.jsx";
import { Color} from "../UI/Color.jsx";
import { Time } from "../UI/Time.jsx";

export const Home = ({ isDarkMode, toggleMode }) => {
  return (
    <div className='card-1'>
      <div className="section">
        <h2>Elige tu modo</h2>
        <button onClick={toggleMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <Like />
      <Color />
      <Time />
    </div>
  )
}