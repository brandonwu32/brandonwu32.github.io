import "./Menu.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import X from "../static/X.png";
import axios from "axios";

function Menu(props){
    const [ menuDisplay, setMenuDisplay ] = useState("0");
    const [ cvlink, setcvlink ] = useState(null);

    useEffect(() =>{
        setMenuDisplay("50%");
    }, []);

    function Exit() {
        setMenuDisplay("0%");
        setTimeout(props.exit, 1000);
        return true;
    };

    let [cvbox, setcvboxes] = useState([]);
    useEffect(() => {
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_CV_ID}`;
        const config = {
          headers : {
            "Authorization" : `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
          }
        };
        axios.get(url, config)
        .then(res => {
          let tableEntries = res.data.records;
          let items = [];
          tableEntries.forEach(record => {
            let entry = record.fields;
            let item = {
              link: entry["Link"],
            }
            items.push(item);
            setcvlink(item.link);
          });
          setcvboxes(items);
        })
        .catch(err=> console.log(err));
      }, []);
    return (
        <div className = "menu" style = {{width: menuDisplay}}>
            <img className = "exit-icon" src = {X} alt = "hello"></img>
            <button className = "exit" onClick = {() => Exit()}></button>
            <ul className="nav-links">
				<li><NavLink onClick = {Exit} to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
				<li><NavLink onClick = {Exit} className={({ isActive }) => isActive ? "active" : ""} to="/portfolio">Portfolio</NavLink></li>
                <li><a href = {cvlink} target="_blank" rel="noopener noreferrer" onClick = {Exit} className={({ isActive }) => isActive ? "active" : ""}>CV</a></li>
			</ul>
        </div>
    );
}

export default Menu;