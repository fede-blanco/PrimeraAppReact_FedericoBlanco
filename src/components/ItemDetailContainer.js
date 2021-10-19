import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import serverData from "./data/serverData";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ setLoading, setError }) => {
  const [item, setItem] = useState([]);

  const { id: itemId } = useParams();

  //No se porque motivo me da undefined la variable "idProducto"
  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      const idProducto = serverData.find(
        (item) => item.id === parseInt(itemId)
      );
      resolve(idProducto);
      reject("Error al enviar id producto");
    }, 2000);
  });

  useEffect(async () => {
    setLoading(true);
    await getItems
      .then((response) => setItem(response))
      .catch((err) => setError(err));
    setLoading(false);
  }, [itemId]);

  //se retorna el componente <ItemDetail/> habiendole pasado como props el item seleccionado
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
