import "./NavBar.css";
import menu_icon from "../static/Menu-Icon.png";
import { useState, useEffect } from "react";

function NavBar(props) {
    
    function toggleMenu(){
        props.exit();
    }

    return (
        <div className = "navigation">
            <div className = "nav-bar" style = {{backgroundColor: props.background_color, backgroundImage: props.gradient}}>
                <p className = "name-title" style = {{color: props.headerColor}}>Brandon</p>
                <button className = "menu-button" style = {{filter: "invert(" + props.menuButtonFilter.toString() + ")"}} onClick = {() => toggleMenu()}><img className = "menu-icon" src = {menu_icon} alt = "hello" width = "25px"></img></button>
            </div>

        </div>
    );
}

export default NavBar;