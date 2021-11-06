import React from "react";
import { useCartContext } from "./CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartList, clearCart, removeItem, totalPrice } = useCartContext();

  console.log(cartList);

  return (
    <div className="container text-center">
      <h1 className="display-1" style={{ color: "#bf9f11" }}>
        Carrito de compras
      </h1>
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
                    <div class="accordion-body row">
                      <div className="col-md d-flex align-items-center justify-content-center">
                        <div className="col-md">
                          <h3>Precio: $ {item.item.price} </h3>
                          <h3>Descripción: {item.item.description} </h3>
                          <img
                            src={item.item.pictureUrl}
                            className="card-img-top p-1 m-auto"
                            style={{ height: "5rem", width: "3rem" }}
                            alt="..."
                          />
                        </div>
                        <button
                          className="btn"
                          style={{
                            backgroundColor: "#cf175a",
                            border: "2px groove #cf175a",
                          }}
                          //cuando se clickea se ejecuta una funcion que llama a "removeItem" con parametro el id del item a remover
                          onClick={() => removeItem(item.item.id)}
                        >
                          Eliminar Producto
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <p className="col-6 my-3 mx-auto" style={{ fontSize: "2rem" }}>
              Total del carrito: ${totalPrice}
            </p>
            <button
              className="btn my-3 col-4 mx-auto"
              style={{
                backgroundColor: "#cf175a",
                border: "2px groove #cf175a",
              }}
              //cuando se clickea se ejecuta una funcion que llama a "removeItem" con parametro el id del item a remover
              onClick={clearCart}
            >
              Vaciar Carrito
            </button>
          </div>
          <div>
            <Link to="/Checkout">
              <button
                className="btn my-3 col-6 mx-auto py-3"
                style={{
                  backgroundColor: "#1cbd67",
                  border: "2px groove #1cbd67",
                }}
                // onClick={clearCart}
              >
                Finalizar Compra
              </button>
            </Link>
          </div>
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
