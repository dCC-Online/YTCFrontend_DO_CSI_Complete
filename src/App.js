import React from 'react';
import logo from './logo.svg';
import CurrentVideo from './Components/CurrentVideo';
import like from './Images/like.png';
import './App.css';
import YouTubePage from './Components/YouTube_Main/YouTubePage';

function App() {
  return (
    <div>
      <header className="App-header">
        <YouTubePage></YouTubePage>
      </header>
    </div>
  );
}

export default App;
