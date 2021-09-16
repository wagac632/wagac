import logo from './ADiLALogo.jfif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World with React!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/company/adilaresearchstudio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit ADiLA
        </a>
      </header>
    </div>
  );
}

export default App;
