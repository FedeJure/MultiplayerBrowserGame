import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './screens/Login/Login';
import { Game } from './game/Game';

function App() {
  const [logged, setLogged] = useState(false); 

  return (
    <div className="App">
      {!logged ? <Login onLogin={() => setLogged(true)}/> :
      <Game />}
    </div>
  );
}

export default App;
