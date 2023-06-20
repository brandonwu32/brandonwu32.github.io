import {Link} from "react-router-dom";

function Consultingbox(props){

    return (
        <div className = "project-box">
            <Link className = "project-text" to={'/consultingmore/'+props.id}><button className = "project-text">
                <h1 className = "project-name">{props.name}</h1>
                <p className = "project-startend">{props.startend}</p>
                <p className = "project-role">{props.role}</p>
                <p className = "project-desc">{props.desc}</p>
            </button></Link>
            <Link className = "prop-image" to={'/consultingmore/'+props.id}><img className = "prop-image" src = {props.image} alt = "hello"></img></Link>

        </div>
    );
};

export default Consultingbox;