import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cartSlice);
  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              <div>
                <p className="mb-0">
                  <span className="text-muted">Sort by:</span>{" "}
                  <a href="#!" className="text-body">
                    price <i className="fas fa-angle-down mt-1"></i>
                  </a>
                </p>
              </div>
            </div>
            {cart.map((item, index) => (
              <CartItem
                key={crypto.randomUUID()}
                productId={item.productId}
                productQuantity={item.quantity}
              />
            ))}

            <div className="card mb-4">
              <div className="card-body p-4 d-flex flex-row">
                <div className="form-outline flex-fill">
                  <input
                    type="text"
                    id="form1"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" for="form1">
                    Discount code
                  </label>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-warning btn-lg ms-3"
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-warning btn-block btn-lg"
                >
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
