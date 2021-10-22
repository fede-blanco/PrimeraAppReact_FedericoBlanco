import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
//import serverData from "./data/serverData";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const ItemDetailContainer = ({ setLoading, setError }) => {
  const [item, setItem] = useState([]);

  const { id: itemId } = useParams();

  // //asi se llamaria a los items del .json con promesas
  // const getItems = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     const idProducto = serverData.find(
  //       (item) => item.id === parseInt(itemId)
  //     );
  //     resolve(idProducto);
  //     reject("Error al enviar id producto");
  //   }, 2000);
  // });

  // //se rerenderiza cada vez que se seleccione un item con un id distinto
  // useEffect(async () => {
  //   setLoading(true);
  //   await getItems
  //     .then((response) => setItem(response))
  //     .catch((err) => setError(err));
  //   setLoading(false);
  // }, [itemId]);

  //llamada a firestore
  useEffect(() => {
    const getItem = async () => {
      setLoading(true);
      const { docs } = await getFirestore().collection("serverData").get();
      const nuevoArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      const itemEncontrado = nuevoArray.find((item) => item.id === itemId);
      setItem(itemEncontrado);
      setLoading(false);
    };
    getItem();
  }, [itemId]);

  //se retorna el componente <ItemDetail/> habiendole pasado como props el item seleccionado
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
