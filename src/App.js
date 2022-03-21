import useScreenSize from './hooks/getScreenSize';

import SideBar from './components/NavBar/SideBar';
import MobileNavBar from './components/NavBar/MobileNavBar';
import './App.css';

const App = () => {
  const screenWidth = useScreenSize();

  return (
    <div className="App">
      {(screenWidth < 768) ? 
      <MobileNavBar /> : 
      <SideBar />
      } 
    </div>
  );
}

export default App;
