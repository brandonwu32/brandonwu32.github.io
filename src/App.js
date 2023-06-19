import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Menu from "./components/Menu";
import Home from './pages/Home';
import ExperienceMore from './pages/ExperienceMore'
import ConsultingMore from './pages/ConsultingMore';
import ProjectMore from './pages/ProjectMore';
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import { useState } from "react";


function App() {
  const [ navBackground, setNavBackground ] = useState("transparent");
  const [ headerColor, setHeaderColor ] = useState("white");
  const [ menuButtonFilter, setMenuButtonFilter ] = useState(1);
  const [ navBarGradient, setNavBarGradient ] = useState("linear-gradient(to bottom, rgba(255,255,255,0.3) , transparent)");
  const [ toggleMenu, setToggleMenu ] = useState(false);

  let lastScrollPosition = 0;
  document.addEventListener('scroll',function(e) {
    if (window.scrollY > lastScrollPosition) {
      setNavBackground("rgb(255,255,255,0.8)");
      setHeaderColor("black");
      setMenuButtonFilter(0);
      setNavBarGradient("none")
    } else {
      setNavBackground("transparent");
      setHeaderColor("white");
      setMenuButtonFilter(1);
      setNavBarGradient("linear-gradient(to bottom, rgba(255,255,255,0.3) , transparent)")
    }
    lastScrollPosition = window.scrollY;
    }, { passive: true });

  function displayMenu(){
    setToggleMenu(!toggleMenu);
  }

  return (
    <Router>
      <div className="App">
        <div className = "nav">
          <NavBar exit = {displayMenu} background_color = {navBackground} headerColor = {headerColor} menuButtonFilter = {menuButtonFilter} gradient = {navBarGradient}></NavBar>
          <div className = "menu-app">
            {toggleMenu && <Menu exit = {displayMenu}/>}
          </div>
        </div>
        <Routes>
          <Route exact path = "/" element={<Home reference="home"/>}/>
          <Route exact path = "/portfolio" element={<Portfolio/>}/>
          <Route exact path = "/cv" element={<Resume/>}/>
          <Route exact path='/experiencemore/:id' element={<ExperienceMore/>}/>
          <Route exact path='/consultingmore/:id' element={<ConsultingMore/>}/>
          <Route exact path='/projectmore/:id' element={<ProjectMore/>}/>
        </Routes>
        <div className = "footer">
          Made with 💪 by Brandon Wu
        </div>
      </div>
    </Router>
  );
}

export default App;