import React from "react";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
  setQuantity,
} from "../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const QuantityChanger = ({productId, cartItem}) => {
    console.log("Cart item: "+productId);
  const quantity = useSelector(
    (state) =>
      state.cart.find((item) => item.productId == productId).quantity
  );
  const dispatch = useDispatch();
  const handleDelete = () => {
    console.log("Delete " + cartItem.id);
    dispatch(removeItem({ id: productId }));
  };
  const handleQuantityIncrement = () => {
    dispatch(incrementQuantity({ id: productId }));
  };
  const handleQuantityDecrement = () => {
    dispatch(decrementQuantity({ id: productId }));
  };
  const handleQuantityChange = () => {
    dispatch(setQuantity());
  };
  return (
    <>
      <div className="col-md-6 col-lg-6 col-xl-3 d-flex">
        <button onClick={handleQuantityDecrement} className="btn btn-link px-2">
          <i className="fas fa-minus"></i>
        </button>

        <input
          id="form1"
          min={0}
          step={1}
          name="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          type="number"
          className="form-control"
        />

        <button className="btn btn-link px-2" onClick={handleQuantityIncrement}>
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
    </>
  );
};

export default QuantityChanger;
