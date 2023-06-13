import "./Projectbox.css";

function Projectbox(props){

    return (
        <div className = "project-box">
            <a className = "project-text" href = "https://insighthousing.org/">
                <h1 className = "project-name">{props.name}</h1>
                <p className = "project-startend">{props.startend}</p>
                <p className = "project-role">{props.role}</p>
                <p className = "project-desc">{props.desc}</p>
            </a>
        <a className = "prop-image" href = "https://insighthousing.org/" target="_blank" rel="noopener noreferrer"><img className = "prop-image" src = {props.image} alt = "hello"></img></a>

        </div>
    );
};

export default Projectbox;