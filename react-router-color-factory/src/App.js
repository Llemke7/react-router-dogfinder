import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails';
import NewColorForm from './NewColorForm';

function App() {
  const initialColors = [
    { name: 'red', color: '#FF0000' },
    { name: 'green', color: '#00FF00' },
    { name: 'blue', color: '#0000FF' }
  ];

  const [colors, setColors] = useState(initialColors);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route path="/colors/new">
          <NewColorForm addColor={addColor} />
        </Route>
        <Route path="/colors/:color">
          <ColorDetails colors={colors} />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </Router>
  );
}

export default App;
