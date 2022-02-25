import React from 'react';
import './App.css';
import Restaurants from './components/Restaurants';
import BasicRating from "./components/Ratings";


function App() {
  return (
    <div>
      <header>My restaurants</header>
    <Restaurants/>
    </div>
  );
}

export default App;
