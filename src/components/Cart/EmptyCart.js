import React from "react";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-capitalize">
          <img className="mx-auto d-block banner" alt="cart" src="../img/cart.svg" /><br></br>
          <h1><b>your cart is  empty</b></h1>
        </div>
      </div>
    </div>
  );
}