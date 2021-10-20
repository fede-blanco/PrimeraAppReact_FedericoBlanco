import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CgShoppingCart } from "react-icons/cg";
import { useCartContext } from "./CartContext";

const CartWidget = () => {
  const { cartProducts } = useCartContext();

  return (
    <>
      <button className="btn btn-info">
        <CgShoppingCart />
        &nbsp;
        {cartProducts > 0 ? (
          <span className="badge bg-secondary">{cartProducts}</span>
        ) : (
          ""
        )}
      </button>
    </>
  );
};

export default CartWidget;
