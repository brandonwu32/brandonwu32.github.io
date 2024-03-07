import "./Projectbox.css";
import {Link} from "react-router-dom";

function Projectbox(props){

    return (
        <div className = "project-box">
            <Link className = "project-text" to={'/projectmore/'+props.id}><button className = "project-text">
                <h1 className = "project-name">{props.name}</h1>
                </button></Link>

            <Link className = "prop-image" to={'/projectmore/'+props.id}><img className = "prop-image" src = {props.image} alt = "hello"></img></Link>
        </div>
    );
};

export default Projectbox;