import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1> 
        <Weather/>
        <footer>
        This project was coded by Amanda Drause and is {""}
        <a
        href="https://github.com/amandareyd/weatherapp-react.git" target="blank" rel="">
        open sourced on Github
        </a>
        </footer>
      </div>
      
    </div>

  );
}

export default App;
