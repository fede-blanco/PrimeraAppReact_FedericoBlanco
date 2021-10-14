import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCount = (props) => {
  const { stock, initial, cartItems, setCartItems, onAdd } = props;
  //creacion de la variable "count" y de setCount que sera la funcion que modificara dicha variable >> se utiliza useState para indicar el valor inicial del estado
  const [count, setCount] = useState(parseInt(initial));

  const restarCount = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  const sumarCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  //se Modifico el Componente ItemCount de una tarjeta a un "inputgroup" pero mantiene las mismas funcionalidades

  return (
    <>
      <div className="input-group mb-3">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon1"
          onClick={restarCount}
        >
          -
        </button>
        <input
          type="text"
          className="form-control text-center"
          placeholder={count}
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={sumarCount}
        >
          +
        </button>
      </div>
      <button className="btn btn-warning w-100" onClick={() => onAdd(count)}>
        Agregar al Carrito
      </button>
    </>
  );
};

export default ItemCount;
