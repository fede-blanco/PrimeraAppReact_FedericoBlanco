import React from "react";

const ItemListContainer = (props) => {
  const { text } = props;
  return (
    <>
      <h1 className="text-center py-2">{text}</h1>;
    </>
  );
};

export default ItemListContainer;
