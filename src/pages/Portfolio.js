import "./Portfolio.css";
import { useState } from "react";
import Slide from 'react-reveal/Slide';
import Projects from "../components/Projects";
import Experiences from '../components/Experiences';
import Consulting from '../components/Consulting';
import Search from "../components/Search";


function Portfolio() {
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
    return (
        <div className = "page3-portfolio">
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
    );
}

export default Portfolio;