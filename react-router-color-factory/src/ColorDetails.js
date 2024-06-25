import React from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';

function ColorDetails({ colors }) {
  const { color } = useParams();
  const currentColor = colors.find(c => c.name === color);

  if (!currentColor) return <Redirect to="/colors" />;

  return (
    <div style={{ backgroundColor: currentColor.color, height: '100vh', width: '100vw' }}>
      <h1>{currentColor.name}</h1>
      <p>{currentColor.color}</p>
      <Link to="/colors">Go back</Link>
    </div>
  );
}

export default ColorDetails;
