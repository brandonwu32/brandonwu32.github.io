import background from './static/background_image.jpg';
import './App.css';

function App() {
  return (
    <div>
      <div className = "nav">
        <p>Hello</p>
        <button>hello</button>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={background} className="background" alt="logo" />
          <p>
            Brandon Wu
          </p>
        </header>
        <div className = "under">
          Hello
        </div>
      </div>
    </div>
  );
}

export default App;
