import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewColorForm({ addColor }) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#000000');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ name, color });
    history.push('/colors');
  };

  return (
    <div>
      <h1>Add a New Color</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="color">Color Value:</label>
          <input
            type="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
}

export default NewColorForm;
