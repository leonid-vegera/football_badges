import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const Timer = () => {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setClock(new Date())
    }, 1000)

  }, [clock]);

  return (
    <div>
      <h1>Час фортуни:</h1>
      <h2>{clock.toLocaleTimeString()}</h2>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Timer/>
      </header>
    </div>
  );
}

export default App;
