import NavBar from "./components/NavBar";
import React, { useState } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

//componentes funcionales
function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      <Router>
        <NavBar />
        {/* Se muestra el mensaje de "cargando..." hasta que se recupere la informacion de la promesa y se vuelva a poner en false */}
        {loading && (
          <h1 style={{ color: "red", fontSize: "8rem" }}>CARGANDO...</h1>
        )}
        <Switch>
          <Route exact path="/">
            <ItemListContainer
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
            />
          </Route>
          <Route path="/categoria/:id">
            <ItemListContainer
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
            />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer
              loading={loading}
              setLoading={setLoading}
              error={error}
              setError={setError}
            />
          </Route>
        </Switch>
        {/* si error deja de ser null y pasa a contener algo se renderizara el mensaje de error que se encontrara dentro del estado error al haber sido seteado en el catch de la promesa por el fallo de la misma */}
        {error && <div>{error}</div>}
      </Router>

      {/* <ItemListContainer text="Bienvenidos a todos al sitio de Federico Blanco" /> */}
    </>
  );
}

export default App;
