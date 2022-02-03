import logo from './logo.svg';
import './App.css';
import Foot from './Footer';


function App() {
  return (
    
    <div className="App">
      <h1>Welcome to my Legal Track</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Green Legal Track <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          footer should be here
          <Foot/>
         
        </a>
      </header>
    </div>
  );
}

export default App;
