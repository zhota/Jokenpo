import React from 'react';
import MenuChoices from './components/menu/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pedra, papel e tesoura!</h1>
        <MenuChoices />
      </header>
    </div>
  );
}

export default App;
