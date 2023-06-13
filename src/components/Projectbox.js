import "./Projectbox.css";
import { useEffect } from "react";

function Projectbox(props){

    return (
        <div className = "project-box">
            <div className = "project-text">
                <h1 className = "project-name">{props.name}</h1>
                <p className = "project-startend">{props.startend}</p>
                <p className = "project-desc">{props.desc}</p>
            </div>
            <img className = "prop-image" src = {props.image} alt = "hello"></img>

        </div>
    );
};

export default Projectbox;