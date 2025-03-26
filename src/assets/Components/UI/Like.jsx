import { useState } from 'react';

export const Like = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="section">
      <h2>Tu like</h2>
      <button onClick={() => setLikes(likes + 1)}>Like ({likes})</button>
      <button onClick={() => setDislikes(dislikes + 1)}>Dislike ({dislikes})</button>
    </div>
  )
}