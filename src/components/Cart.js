import React from "react";
import { useCartContext } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button, Container, ListGroup } from "react-bootstrap";

const Cart = () => {
  const { cartList, clearCart, removeItem } = useCartContext();

  console.log(cartList);

  return (
    <div className="container text-center">
      <h1 className="display-1">Carrito de compras</h1>
      {cartList.length > 0 ? (
        <>
          <div className="accordion">
            {cartList.map((item) => {
              return (
                <div className="accordion-item" key={item.item.id}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      {item.item.title}
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <button
                        className="btn bg-danger"
                        //cuando se clickea se ejecuta una funcion que llama a "removeItem" con parametro el id del item a remover
                        onClick={() => removeItem(item.item.id)}
                      >
                        Eliminar Producto
                      </button>
                      <h3>Precio: $ {item.item.price} </h3>
                      <h3>Descripción: {item.item.description} </h3>
                      <img
                        src={item.item.pictureUrl}
                        className="card-img-top p-1 m-auto"
                        style={{ height: "32rem", width: "18rem" }}
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="btn bg-warning my-3"
            //cuando se clickea se ejecuta una funcion que llama a "removeItem" con parametro el id del item a remover
            onClick={clearCart}
          >
            Vaciar Carrito
          </button>
        </>
      ) : (
        <Link to="/">
          <button className="btn btn-success my-3">
            El carrito no contiene items
          </button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
