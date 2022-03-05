import React from 'react';
import './App.css';
import Restaurants from './components/Restaurants';

function App() {
  return (
    <div className='App'>
      <header>
      <meta name="viewport" content="width=device-width,initial-scale=1"/>
        My restaurants</header>
    <Restaurants/>
    </div>
  );
}

export default App;
