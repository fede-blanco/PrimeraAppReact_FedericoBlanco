import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  const { text } = props;
  return (
    <>
      <h1 className="text-center py-2">{text}</h1>;
      <ItemCount stock="10" initial="1" />
    </>
  );
};

export default ItemListContainer;
