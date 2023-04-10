import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";

const CartItem = ({ productId, productQuantity }) => {
  const [cartItem, setCartItem] = useState({});
  const [quantity, setQuantity] = useState(productQuantity);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://dummyjson.com/product/" + productId)
      .then((res) => res.json())
      .then((data) => setCartItem(data));
  }, []);
  console.log("From cart item :" + productId + " " + quantity);
  const handleDelete = () => {
    console.log("Delete " + cartItem.id);
    dispatch(removeItem({ id: productId }));
  };
  const handleQuantityIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleQuantityDecrement = () => {
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="card rounded-3 mb-4">
      <div className="card-body p-4">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img src={cartItem.thumbnail} className="img-fluid rounded-3" />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <p className="lead fw-normal mb-2">{cartItem.title}</p>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 d-flex">
            <button
              onClick={handleQuantityDecrement}
              className="btn btn-link px-2"
            >
              <i className="fas fa-minus"></i>
            </button>

            <input
              id="form1"
              min={0}
              step={1}
              name="quantity"
              value={quantity}
              type="number"
              className="form-control"
            />

            <button
              className="btn btn-link px-2"
              onClick={handleQuantityIncrement}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h5 className="mb-0">${cartItem.price}</h5>
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
            <a onClick={handleDelete} className="text-danger">
              <i className="fas fa-trash fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
