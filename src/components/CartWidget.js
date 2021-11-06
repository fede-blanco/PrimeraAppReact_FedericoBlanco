import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CgShoppingCart } from "react-icons/cg";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartProducts } = useCartContext();

  return (
    <>
      <Link to="/cart">
        <button
          className="btn btn-info"
          style={{ backgroundColor: "#bf9f11", border: "2px solid #bf9f11" }}
        >
          <CgShoppingCart />
          &nbsp;
          {cartProducts > 0 ? (
            <span className="badge bg-secondary">{cartProducts}</span>
          ) : (
            ""
          )}
        </button>
      </Link>
    </>
  );
};

export default CartWidget;
