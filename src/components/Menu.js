import "./Menu.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import X from "../static/X.png";

function Menu(props){
    const [ menuDisplay, setMenuDisplay ] = useState("0");

    useEffect(() =>{
        setMenuDisplay("50%");
    }, []);

    function Exit() {
        setMenuDisplay("0%");
        setTimeout(props.exit, 500);
        return true;
    };

    return (
        <div className = "menu" style = {{width: menuDisplay}}>
            <img className = "exit-icon" src = {X} alt = "hello"></img>
            <button className = "exit" onClick = {() => Exit()}></button>
            <ul className="nav-links">
				<li><NavLink onClick = {Exit} to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
				<li><NavLink onClick = {Exit} to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
                <li><NavLink onClick = {Exit} to="/experiences"className={({ isActive }) => isActive ? "active" : ""}>Experience</NavLink></li>
				<li><NavLink onClick = {Exit} to="/consulting" className={({ isActive }) => isActive ? "active" : ""}>Consulting</NavLink></li>
                <li><NavLink onClick = {Exit} to="/search" className={({ isActive }) => isActive ? "active" : ""}>Search 🔎</NavLink></li>
			</ul>
        </div>
    );
}

export default Menu;