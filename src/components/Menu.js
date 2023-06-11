import "./Menu.css";

function Menu(props){
    return (
        <div className = "menu">
            <button onClick = {() => props.exit()}>Hello</button>
            <p className = "rand">Hello World</p>
        </div>
    );
}

export default Menu;