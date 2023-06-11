import background from './static/background_image.jpg';
import './App.css';
import NavBar from './components/NavBar';
import { useState, useEffect } from "react";
import Menu from "./components/Menu";

function App() {
  const [ toggleMenu, setToggleMenu ] = useState(false);

  function displayMenu(){
    setToggleMenu(!toggleMenu);
  }
  return (
    <div>
      <div className = "nav">
        <NavBar exit = {displayMenu}></NavBar>
        <div className = "menu-app">
          {toggleMenu && <Menu exit = {displayMenu}/>}
        </div>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={background} className="background" alt="logo"/>
          <p>
            Brandon Wu
          </p>
        </header>
        <div className = "under">
          "Hello"
        </div>
      </div>
    </div>
  );
}

export default App;
