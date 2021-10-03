import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = ({ text }) => {
  //Se inicializan los estados de "items", "loading" y "error"
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  // Array con objetos producto para luego realizar los itmes para el desafio de la clase 6
  const serverData = [
    {
      id: 0,
      title: "Guitarra Criolla Clasica Estudio Natural Bamboo",
      description: "Guitarra criolla",
      price: 9990,
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_911089-MLA44273239284_122020-O.webp",
    },
    {
      id: 1,
      title: "Guitarra Electrica Ibanez Gio Grx40",
      description: "Guitarra electrica",
      price: 37000,
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_633887-MLA43145580826_082020-O.webp",
    },
    {
      id: 2,
      title: "Squier Guitarra Eléctrica Affinity Stratocaster",
      description: "Guitarra electrica",
      price: 70000,
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_702019-MLA42319037133_062020-O.webp",
    },
    {
      id: 3,
      title: "Guitarra Electroacústica Fender Concert",
      description: "Guitarra electroacustica",
      price: 75000,
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_675841-MLA43054184144_082020-O.webp",
    },
    {
      id: 4,
      title: "Guitarra Eléctrica Les Paul Onas Frizz",
      description: "Guitarra electrica",
      price: 28900,
      pictureUrl:
        "https://http2.mlstatic.com/D_NQ_NP_885128-MLA32880469711_112019-O.webp",
    },
  ];

  //Se asocia a la variable "obtenerData" una promesa que obtiene un objeto con los datos de del array de objetos en forma diferida utilizando setTimeout
  const obtenerData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(serverData);
      reject("Hubo un error al obtener los datos del servidor");
    }, 2000);
  });

  //Se utiliza useEffect para realizar un efecto de montaje que emita un llamado asincronico a un objeto que devuelve una promesa con un conjunto de items >> si la promesa retorna fullfilled se seteara el estado "items" con lo que haya en "serverData", si retorna rejected se seteara "error" con el mensaje "Hubo un error al obtener los datos del servidor"
  //Ademas se le agrega el estado "loading" que se mostrara al hacerse true hasta que se obtengan los datos del array y vuelva a ponerse en false

  useEffect(async () => {
    setLoading(true);
    await obtenerData
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {
        setError(err);
      });
    setLoading(false);
  }, []);

  //se crea un metodo que recibe como parametro un item y setea el estado de selected item con el contenido de dicho item >> para saber que item es el seleccionado
  const selectItem = (item) => setSelectedItem(item);

  return (
    <div className="container text-center">
      <h1 className="text-center py-2">{text}</h1>

      {/* Se muestra el mensaje de "cargando..." hasta que se recupere la informacion de la promesa y se vuelva a poner en false */}
      {loading && (
        <h1 style={{ color: "red", fontSize: "8rem" }}>CARGANDO...</h1>
      )}

      {/* En este renderizado condicional se mostrara >> En caso de que se selecione un item y selectedItem tenga contenido, se renderizara el ItemDetailContainer al cual se le va  apasar la informacion de dicho item para que lo renderize y en caso de que no se seleccione nada (selectedItem == null) se renderizara la lista de items */}
      {!selectedItem ? (
        <ItemList items={items} selectItem={selectItem} />
      ) : (
        <ItemDetailContainer
          selectedItem={selectedItem}
          selectItem={selectItem}
          setError={setError}
          setLoading={setLoading}
        />
      )}

      {/* cuando loading este en "true" (mientras se espera la respuesta de la promesa) se renderizara el texto "CARGANDO...", pero cuando pase a ser false nuevamente (luego de recibir la respuesta diferida de la promesa) dejara de ren derizar eso y renderizara el componente "ItemList"
      {loading
        ? <h1 style={{color: "red", fontSize: "8rem" }}>CARGANDO...</h1>
        : <ItemList items={items} />
      } */}

      {/* si error deja de ser null y pasa a contener algo se renderizara el mensaje de error que se encontrara dentro del estado error al haber sido seteado en el catch de la promesa por el fallo de la misma */}
      {error && <div>{error}</div>}
    </div>
  );
};

export default ItemListContainer;
