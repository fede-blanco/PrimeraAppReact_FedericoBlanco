import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const ItemDetailContainer = ({ setLoading, setError }) => {
  const [item, setItem] = useState([]);

  const { id: itemId } = useParams();

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
