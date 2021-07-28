import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './screens/Login/Login';
import { Game } from './game/Game';

function App() {
  const [logged, setLogged] = useState(false); 
  const [playerId, setPlayerId] = useState<string | undefined>(undefined)

  return (
    <div className="App">
      {!logged ? <Login onLogin={(loggedPlayerId) => {
        setLogged(true)
        setPlayerId(loggedPlayerId)
      }}/> :
      playerId && <Game playerId={playerId}/>}
    </div>
  );
}

export default App;
