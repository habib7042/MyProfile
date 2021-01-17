import React from 'react'
import './App.css';
//Component
import Navbar from './components/header/Navbar';
import MyCarousal from './components/carousal/MyCarousal';
import MyTitle from './components/title/Title';

function App() {
  return (
    <div className ="app" style={{ position: "relative" }}>
    	<MyCarousal/>
      	<Navbar/>
      	<MyTitle/>
    </div>
  );
}

export default App;
