import logo from "./logo.svg";
import "./App.css";

//componentes de clase

//componentes funcionales
function App() {
  const jsx = <h1>Federico Blanco</h1>;

  let styles = {
    color: "red",
  };

  const stylesJsx = <div style={styles}>{jsx}</div>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {stylesJsx}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
