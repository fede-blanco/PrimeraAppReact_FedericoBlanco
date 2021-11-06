import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./ItemCount";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";

export const ItemDetail = (item) => {
  const { id, title, description, price, stock, pictureUrl } = item.item;

  //setCartList no se va a utilizar mas ya que va a estar incluido dentro de 'agregarItem'
  const { cartList, agregarItem } = useCartContext();

  console.log(cartList);

  const history = useHistory();

  const onAdd = (cant) => {
    console.log(cant);
    // //onAdd setea el cartList con un array con un objeto que contiene dentro de si una propiedad que seria eun item completo y una propiedad que seria cantidad
    //se termino reemplazando por una funcion que cumple la funcion de setear pero que viene desde CartContext
    // setCartList([{ item: item, cantidad: qty }]);

    agregarItem(item.item, cant);
  };

  const closeDetail = () => history.goBack();

  //retorna una tarjeta con todos los datos del item seleccionado
  return (
    <>
      {(id, title, description, price, stock, pictureUrl) ? (
        <div className="row">
          <div
            id={id}
            className="card border-dark text-center m-auto "
            style={{ width: "30rem" }}
          >
            <img
              src={pictureUrl}
              className="card-img-top p-1 m-auto"
              style={{ height: "32rem", width: "18rem" }}
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>${price}</strong>
              </li>
              <li className="list-group-item">
                {cartList.length > 0 ? (
                  <>
                    <ItemCount onAdd={onAdd} stock={stock} initial="1" />
                    <Link to="/cart">
                      <button
                        className="btn btn-success my-3"
                        style={{
                          backgroundColor: "#1cbd67",
                          border: "2px groove #1cbd67",
                        }}
                      >
                        Ir al detalle del carrito
                      </button>
                    </Link>
                  </>
                ) : (
                  <ItemCount onAdd={onAdd} stock={stock} initial="1" />
                )}
              </li>
            </ul>

            <div>
              <button
                onClick={closeDetail}
                className="btn btn-danger w-50 p-1 m-2"
                style={{
                  backgroundColor: "#cf175a",
                  border: "2px groove #cf175a",
                }}
              >
                Cerrar Detalle
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1> </h1>
      )}
    </>
  );
};

export default ItemDetail;
