import NavBar from "./components/NavBar";
import React, { useState } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidget from "./components/CartWidget";
import Cart from "./components/Cart";
import { CartContextProvider } from "./components/CartContext";
import Checkout from "./components/Checkout";

//componentes funcionales
function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      <CartContextProvider>
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

            {/* Ruta que lleva del boton 'terminar compra' al componente carrito */}
            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
          {/* si error deja de ser null y pasa a contener algo se renderizara el mensaje de error que se encontrara dentro del estado error al haber sido seteado en el catch de la promesa por el fallo de la misma */}
          {error && <div>{error}</div>}
        </Router>
      </CartContextProvider>

      {/* <ItemListContainer text="Bienvenidos a todos al sitio de Federico Blanco" /> */}
    </>
  );
}

export default App;

//Ejemplo explicado de como llamar a firestore (los metodos como get se explican en la documentacion de firestore)
// import React, { useEffect, useState } from "react";
// import { getFirestore } from "./firebase";
// const App = () => {
//   const [loading, setLoading] = useState(false);
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     setLoading(true);
//     //inicializar la conexion con firebase u conectarme
//     //a firestore
//     const db = getFirestore();
//     //ir a la coleccion que yo quiera >>> en nuestro caso era "serverData"
//     const itemCollection = db.collection("serverData");
//     //Vamos a buscar la informacion
//     //se busca la informacion mediante ".get" accede a todos los "documentos" de la coleccion
//     itemCollection
//       //el metodo .get visita la coleccion que nosotros tenemos y recupera todos los documentos que haya en la misma
//       .get()
//       //en el caso de que la llamada sea exitosa sucedera los del then y retornara la info en el parametro
//       .then((querySnapshot) => {
//         //si la coleccion esta vacia mostrara que no hay resultados
//         if (querySnapshot.size === 0) {
//           console.log("No Hay resultados");
//         }
//         console.log("tamaño de la coleccion: " + querySnapshot.docs.length);
//         console.log("documentos: ", querySnapshot.docs);
//         //si la coleccion no esta vacio setea items haciendo un map y por cada documento setea los datos dentro del mismo
//         setItems(
//           querySnapshot.docs.map((doc) => {
//             //console.log(doc.id, doc.data().title);
//             //mapea los documentos y por cada uno retorna un objeta que contenga el id (que se obtiene por separado porque esta un estrato mas arriba en la base de datos) y el resto de las propiedades que estan dentro de "data()"
//             return { id: doc.id, ...doc.data() };
//           })
//         );
//       })
//       //si la llamada no retorna exitosa se hara lo que dice el catch
//       .catch((error) => {
//         console.log("Error al traer los items", error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);
//   console.log(items);
//   return (
//     <>
//       <div>{loading && <p>Cargando Informacion...</p>}</div>
//       {!loading &&
//         items.map((item) => {
//           return (
//             <ul key={item.id}>
//               <li key={item.id}>{item.id}</li>
//               <li key={item.categoria}>{item.categoria}</li>
//               <li key={item.description}>{item.description}</li>
//               <li key={item.pictureUrl}>
//                 <img src={item.pictureUrl} />
//               </li>
//               <li key={item.price}>{item.price}</li>
//               <li key={item.stock}>{item.stock}</li>
//               <li key={item.title}>{item.title}</li>
//             </ul>
//           );
//         })}
//     </>
//   );
// };
// export default App;
