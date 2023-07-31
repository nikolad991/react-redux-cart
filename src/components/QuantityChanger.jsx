import React, { useEffect } from "react";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
} from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const QuantityChanger = ({ productId, cartItem, quantity }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeItem({ id: productId }));
  };
  const handleQuantityIncrement = () => {
    dispatch(incrementQuantity({ id: productId }));
  };
  const handleQuantityDecrement = () => {
    dispatch(decrementQuantity({ id: productId }));
  };

  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-3 d-flex">
        <div className="quantity">
          <span onClick={handleQuantityDecrement}>
            -
          </span>
          <span>{quantity}</span>
          <span onClick={handleQuantityIncrement}>
            +
          </span>
        </div>
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h5 className="mb-0">${cartItem?.price * quantity}</h5>
      </div>
      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
        <a onClick={handleDelete} className="text-danger">
          <i className="fas fa-trash fa-lg"></i>
        </a>
      </div>
    </>
  );
};

export default QuantityChanger;
