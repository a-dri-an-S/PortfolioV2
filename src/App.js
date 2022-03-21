// import { useState } from 'react';
import useScreenSize from './hooks/getScreenSize';

import SideBar from './components/NavBar/SideBar';
import './App.css';

const App = () => {
  const screenWidth = useScreenSize();

  console.log(screenWidth);

  return (
    <div className="App">
      {screenWidth < 768 ? 
      <h1>hello</h1> : 
      <SideBar />
      } 
    </div>
  );
}

export default App;
