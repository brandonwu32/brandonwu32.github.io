import './Home.css';
import NavBar from '../components/NavBar';
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Earth from "../static/Earth.png";
import Rocket from "../static/rocket.png";
import Portrait from "../static/Portrait.png";
import Instagram from "../static/instagram.png";
import Github from "../static/github.png";
import Facebook from "../static/facebook.png";
import Linkedin from "../static/linkedin.png";
import Projects from "../components/Projects";
import Experiences from '../components/Experiences';
import Consulting from '../components/Consulting';
import Search from "../components/Search";
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';



function App() {

  const [ projectsdisplay, setProjectsDisplay ] = useState("block");
  const [ consultingdisplay, setConsultingDisplay ] = useState("block");
  const [ experiencesdisplay, setExperiencesDisplay ] = useState("block");
  const [ searchdisplay, setSearchDisplay ] = useState("none");
  const [ allColor, setAllColor] = useState("rgb(129, 230, 242)");
  const [ projectsColor, setProjectsColor] = useState("white");
  const [ consultingColor, setConsultingColor] = useState("white");
  const [ experiencesColor, setExperiencesColor] = useState("white");
  const [ searchColor, setSearchColor] = useState("white");



  function toggleAll() {
    setProjectsColor("white");
    setExperiencesColor("white");
    setConsultingColor("white");
    setAllColor("rgb(129, 230, 242)");
    setSearchColor("white");
    setProjectsDisplay("block");
    setConsultingDisplay("block");
    setExperiencesDisplay("block")
    setSearchDisplay("none");
  }

  function toggleProjects() {
    setProjectsColor("rgb(129, 230, 242)");
    setExperiencesColor("white");
    setConsultingColor("white");
    setSearchColor("white");
    setAllColor("white");
    setProjectsDisplay("block");
    setConsultingDisplay("none");
    setExperiencesDisplay("none")
    setSearchDisplay("none");
  }

  function toggleConsulting() {
    setProjectsColor("white");
    setExperiencesColor("white");
    setConsultingColor("rgb(129, 230, 242)");
    setAllColor("white");
    setSearchColor("white");
    setProjectsDisplay("none");
    setConsultingDisplay("block");
    setExperiencesDisplay("none")
    setSearchDisplay("none");
  }

  function toggleExperiences() {
    setProjectsColor("white");
    setExperiencesColor("rgb(129, 230, 242)");
    setConsultingColor("white");
    setAllColor("white");
    setSearchColor("white");
    setProjectsDisplay("none");
    setConsultingDisplay("none");
    setExperiencesDisplay("block")
    setSearchDisplay("none");
  }

  function toggleSearch() {
    setProjectsColor("white");
    setExperiencesColor("white");
    setConsultingColor("white");
    setAllColor("white");
    setSearchColor("rgb(129, 230, 242)");
    setProjectsDisplay("none");
    setConsultingDisplay("none");
    setExperiencesDisplay("none");
    setSearchDisplay("block");
  }

  const handleClickScroll1 = () => {
    const element = document.getElementById('bio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }}

  return (
    <div>
      <div className = "space">
        <button onClick = {handleClickScroll1} className = "Rocket1">hello</button>
        <img alt = "hello" className = "Rocket" src = {Rocket}></img>
        <img alt = "hello" className = "Earth" src = {Earth}></img>
      </div>

      <div className="App">
        <header className="App-header">
          <Typewriter
                options={{loop: true,}}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Innovator")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Engineer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Student")
                        .pauseFor(1000)
                        .start()
                        ;
                }}
                className = "typewriter"
            />
        </header>
        <div className = "bottom-gradient">
                <p>Hello</p>
            </div>
        <div className = "page2" id = "bio">
          <Bounce>
          <img className = "portrait" src = {Portrait} alt = "hello"></img>
          </Bounce>
          <div className = "text">
            <div className = "socials">
                <a className = "social" href = "https://www.linkedin.com/in/brandonwu32/" target="_blank" rel="noopener noreferrer"><img src = {Linkedin} alt = "hello"></img></a>
                <a className = "social" href = "https://github.com/brandonwu32" target="_blank" rel="noopener noreferrer"><img src = {Github} alt = "hello"></img></a>
                <a className = "social" href = "https://www.facebook.com/brandon.wu.94" target="_blank" rel="noopener noreferrer"><img src = {Facebook} alt = "hello"></img></a>
                <a className = "social" href = "https://www.instagram.com/brandonwuuu/" target="_blank" rel="noopener noreferrer"><img src = {Instagram} alt = "hello"></img></a>

            </div>
            <Zoom>
            <h1 className = "greet">You landed on my Website!</h1>
            </Zoom>
            <p className = "paragraph">I am a freshman at the University of California Berkeley. I am currently studying Computer Science in the College of Letters and Science. I enjoy doing Full-stack web development projects for tech organizations.
              <br></br><br></br>Outside of work, I am involved in some awesome organizations on Campus. I am a client developer at <a className = "highlight1">Codebase</a> where I am developing software ranging from donation-portals and webites to Machine Learning and Blockchain applications. I'm also a business analyst at <a className = "highlight2">Consult Your Community</a> where I consult for a wide variety of local businesses.
            </p>
            <br></br>
            <br></br>
          </div>

        </div>
        <div className = "page3">
          <p className = "portfolio" id = "portfolio">Portfolio</p>
          <div className = "portfolio-menu">
              <button onClick = {toggleAll} className = "portfolio-item"><p style = {{color: allColor}}>All</p></button>
              <button onClick = {toggleProjects} className = "portfolio-item"><p style = {{color: projectsColor}}>Projects</p></button>
              <button onClick = {toggleConsulting} className = "portfolio-item"><p style = {{color: consultingColor}}>Consulting</p></button>
              <button onClick = {toggleExperiences} className = "portfolio-item"><p style = {{color: experiencesColor}}>Experiences</p></button>
              <button onClick = {toggleSearch} className = "portfolio-item-last"><p style = {{color: searchColor}}>Search 🔎</p></button>
          </div>
          <div className = "portfolio-sections">
            <div className = "Projects" style = {{display: projectsdisplay}}>
              <Slide left>
              <h1 className = "section-title">Projects</h1>
              </Slide>
              <Slide right>
              <Projects></Projects>
              </Slide>
            </div>
            <div className = "Consulting" style = {{display: consultingdisplay}}>
              <Slide left>
              <h1 className = "section-title">Consulting</h1>
              </Slide>
              <Slide right>
              <Consulting></Consulting>
              </Slide>
            </div>
            <div className = "Experiences" style = {{display: experiencesdisplay}}>
              <Slide left>
              <h1 className = "section-title">Experiences</h1>
              </Slide>
              <Slide right>
              <Experiences></Experiences>
              </Slide>
            </div>
            <div className = "Search" style = {{display: searchdisplay}}>
              <h1 className = "section-title">Search</h1>
              <Search></Search>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
