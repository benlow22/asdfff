import logo from './pokemonLogo.jpeg';
import './App.css';
//import {TypeList} from './Components/typeList/TypeList.js';
import {OpponentType} from './Components/opponentType/OpponentType.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="pokemon_Logo" alt="pokemon Logo"/>
        <p>
          Welcome to PokeBuddy
        </p>
{/*        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter
  </a>*/}
        <OpponentType />
      </header>
    </div>
  );
}

export default App;
