import logo from './function_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>&#8987;Site under construction&#8987;</p>
       
        <div className="sameLine">
        <li>contact&nbsp;</li>
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact@function.money 
        </a>
        <li>&nbsp;for hiring opportunities and business inquires</li>
        </div>
      </header>
    </div>
  );
}

export default App;
