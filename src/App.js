import NavBar from "./components/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";

//componentes funcionales
function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer text="Bienvenidos a todos al sitio de Federico Blanco" />
    </>
  );
}

export default App;
