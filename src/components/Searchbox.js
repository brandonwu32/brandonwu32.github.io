import "./Searchbox.css";
import Slide from 'react-reveal/Slide';

function Searchbox(props){
    return (
        <div className = "search-box">
            <Slide right>
            <p className = "search-column">{props.name}</p>
            <p className = "search-column">{props.preview}</p>
            <p className = "search-column">{props.skills}</p>
            </Slide>
        </div>
    );
}

export default Searchbox;