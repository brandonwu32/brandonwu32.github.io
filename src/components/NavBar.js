import "./NavBar.css";
import menu_icon from "../static/Menu-Icon.png";
import { useState } from "react";

function NavBar(props) {

    function toggleMenu(d1){
        props.exit();
    }

    return (
        <div className = "navigation">
            <div className = "nav-bar">
                <p className = "name-title">Brandon</p>
                <button className = "menu-button" onClick = {() => toggleMenu("none")}><img className = "menu-icon" src = {menu_icon} alt = "hello" width = "25px"></img></button>
            </div>

        </div>
    );
}

export default NavBar;