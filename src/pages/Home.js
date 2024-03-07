import './Home.css';
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Earth from "../static/Earth.png";
import Rocket from "../static/rocket.png";
import Portrait from "../static/Portrait.svg";
import Instagram from "../static/insta.svg";
import Github from "../static/github.svg";
import Facebook from "../static/fb.svg";
import Linkedin from "../static/linkedin.svg";
import Projects from "../components/Projects";
import Experiences from '../components/Experiences';
import Consulting from '../components/Consulting';
import Search from "../components/Search";
import Slide from 'react-reveal/Slide';
import axios from "axios";

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
  const [ firstParagraph, setFirstParagraph ] = useState("")
  const [ secondParagraph, setSecondParagraph ] = useState("")

  useEffect(() => {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_BIO_ID}`;
    const config = {
      headers : {
        "Authorization" : `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
      }
    };
    axios.get(url, config)
    .then(res => {
      let tableEntries = res.data.records;
      tableEntries.forEach(record => {
        let entry = record.fields;
        let item = {
          p_number: entry["Paragraph Number"],
          text: entry["Text"]
        }
        if (item.p_number == "0") {
          setFirstParagraph(item.text);
        } else {
          setSecondParagraph(item.text);
        }
      });
    })
    .catch(err=> console.log(err));
  }, []);

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
                        .typeString("Welcome to my page")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Innovator")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Engineer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Rizzler")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Goat")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Father Figure")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Best PM")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Handsome")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("W Mans")
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
            <p className = "paragraph">{firstParagraph} <br/> <br/> {secondParagraph}</p>
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
