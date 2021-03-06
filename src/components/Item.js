import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

//En este componente se retorna una tarjeta con un item y sus propiedades que provienen desde el componente ItemList, que a su vez provienen desde ItemListContainer, donde se obtuvieron de una base de datos falsa/ objeto JSON.
//este Item recibe como prop un item con propiedades, el cual desestructura para luego ir integrandolas de a una en el componente donde deben estar.

const Item = (props) => {
  const { id, title, description, price, pictureUrl } = props;

  return (
    <div className="col col-md-6 col-lg-4 m-auto">
      <div
        id={id}
        className="card border-dark text-center m-2"
        style={{ width: "18rem" }}
      >
        <img
          src={pictureUrl}
          className="card-img-top p-1"
          style={{ height: "32rem" }}
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
        </ul>
        <div className="card-body">
          <Link
            to={`/item/${id}`}
            className="btn btn-secondary"
            style={{ backgroundColor: "#bf9f11", border: "2px groove #bf9f11" }}
          >
            Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
