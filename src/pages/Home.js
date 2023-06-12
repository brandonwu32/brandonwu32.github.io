import background from '../static/background_image.jpg';
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

function App() {

  const [ projectsdisplay, setProjectsDisplay ] = useState("block");
  const [ consultingdisplay, setConsultingDisplay ] = useState("block");
  const [ experiencesdisplay, setExperiencesDisplay ] = useState("block");
  const [ searchdisplay, setSearchDisplay ] = useState("none");

  function toggleAll() {
    setProjectsDisplay("block");
    setConsultingDisplay("block");
    setExperiencesDisplay("block")
    setSearchDisplay("none");
  }

  function toggleProjects() {
    setProjectsDisplay("block");
    setConsultingDisplay("none");
    setExperiencesDisplay("none")
    setSearchDisplay("none");
  }

  function toggleConsulting() {
    setProjectsDisplay("none");
    setConsultingDisplay("block");
    setExperiencesDisplay("none")
    setSearchDisplay("none");
  }

  function toggleExperiences() {
    setProjectsDisplay("none");
    setConsultingDisplay("none");
    setExperiencesDisplay("block")
    setSearchDisplay("none");
  }

  function toggleSearch() {
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
          <img src={background} className="background" alt="logo"/>
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
          <img className = "portrait" src = {Portrait} alt = "hello"></img>
          <div className = "text">
            <div className = "socials">
                <a className = "social" href = "https://www.linkedin.com/in/brandonwu32/" target="_blank" rel="noopener noreferrer"><img src = {Linkedin} alt = "hello"></img></a>
                <a className = "social" href = "https://github.com/brandonwu32" target="_blank" rel="noopener noreferrer"><img src = {Github} alt = "hello"></img></a>
                <a className = "social" href = "https://www.facebook.com/brandon.wu.94" target="_blank" rel="noopener noreferrer"><img src = {Facebook} alt = "hello"></img></a>
                <a className = "social" href = "https://www.instagram.com/brandonwuuu/" target="_blank" rel="noopener noreferrer"><img src = {Instagram} alt = "hello"></img></a>

            </div>
            <h1 className = "greet">You landed on my Website!</h1>
            <p className = "paragraph">I am a freshman at the University of California Berkeley. I am currently studying Computer Science in the College of Letters and Science. I enjoy doing Full-stack web development projects for tech organizations.
              <br></br><br></br>Outside of work, I am involved in some awesome organizations on Campus. I am a client developer at <a className = "highlight1">Codebase</a> where I am developing software ranging from donation-portals and webites to Machine Learning and Blockchain applications. I'm also a business analyst at <a className = "highlight2">Consult Your Community</a> where I consult for a wide variety of local businesses.
            </p>
            <a className = "resume" href ="https://drive.google.com/file/d/1wJuL1wxXP0gBcLDagE9dziapTa9uzZpP/view" target="_blank" rel="noopener noreferrer">View Resume</a>
            <br></br>
            <br></br>
          </div>

        </div>
        <div className = "page3">
          <p className = "portfolio">Portfolio</p>
          <div className = "portfolio-menu">
              <button onClick = {toggleAll} className = "portfolio-item">All</button>
              <button onClick = {toggleProjects} className = "portfolio-item">Projects</button>
              <button onClick = {toggleConsulting} className = "portfolio-item">Consulting</button>
              <button onClick = {toggleExperiences} className = "portfolio-item">Experiences</button>
              <button onClick = {toggleSearch} className = "portfolio-item-last">Search 🔎</button>
          </div>
          <div className = "portfolio-sections">
            <div className = "Projects" style = {{display: projectsdisplay}}>
              <Projects></Projects>
            </div>
            <div className = "Consulting" style = {{display: consultingdisplay}}>
              <Consulting></Consulting>
            </div>
            <div className = "Experiences" style = {{display: experiencesdisplay}}>
              <Experiences></Experiences>
            </div>
            <div className = "Search" style = {{display: searchdisplay}}>
              <Search></Search>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
