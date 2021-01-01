import React from 'react'
import './App.css';
//Component
import Navbar from './components/header/Navbar';
import MyCarousal from './components/carousal/MyCarousal'

function App() {
  return (
    <div className ="app">
      <Navbar/>
      <MyCarousal/>
    </div>
  );
}

export default App;
