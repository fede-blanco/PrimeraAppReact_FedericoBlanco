import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CgShoppingCart } from "react-icons/cg";

const CartWidget = (props) => {
  const { number } = props;
  return (
    <>
      <button className="btn btn-info">
        <CgShoppingCart />
        {number}
      </button>
    </>
  );
};

export default CartWidget;
