import "./Menu.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import X from "../static/X.png";

function Menu(props){
    const [ menuDisplay, setMenuDisplay ] = useState("0%");

    useEffect(() =>{
        setMenuDisplay("50%");
    }, []);

    function Exit() {
        props.exit();
    }

    return (
        <div className = "menu" style = {{width: menuDisplay}}>
            <img className = "exit-icon" src = {X} alt = "hello"></img>
            <button className = "exit" onClick = {() => Exit()}></button>
            <ul className="nav-links">
				<li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
				<li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
                <li><NavLink to="/experiences"className={({ isActive }) => isActive ? "active" : ""}>Experience</NavLink></li>
				<li><NavLink to="/consulting" className={({ isActive }) => isActive ? "active" : ""}>Consulting</NavLink></li>
                <li><NavLink to="/search" className={({ isActive }) => isActive ? "active" : ""}>Search 🔎</NavLink></li>
			</ul>
        </div>
    );
}

export default Menu;