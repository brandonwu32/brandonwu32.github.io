import "./Menu.css";
import { useState, useEffect } from "react";

function Menu(props){
    const [ menuDisplay, setMenuDisplay ] = useState("0%");

    useEffect(() =>{
        setMenuDisplay("40%");
    }, []);

    function Exit() {
        props.exit();
    }

    return (
        <div className = "menu" style = {{width: menuDisplay}}>
            <button onClick = {() => Exit()}>Hello</button>
            <p className = "rand">Hello World</p>
        </div>
    );
}

export default Menu;