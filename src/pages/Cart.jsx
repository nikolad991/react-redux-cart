import { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { FaCcPaypal, FaCcMastercard, FaCcVisa } from "react-icons/fa";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    return cart.reduce((acc, { productId, quantity }) => {
      const product = products.find((product) => product.id === productId);
      acc += product?.price * quantity;
      return acc;
    }, 0);
  };
  useEffect(() => {
    setTotal(calculateTotal());
  }, [cart, products]);
  return (
    <section className="row cart">
      <div className="col-md-8 ">
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
            {console.log(cart)}
            {cart.map((item, index) => (
              <CartItem key={crypto.randomUUID()} productId={item.productId} />
            ))}
          </div>
        </div>
      </div>
      <div className="text-white payment col-md-4 py-5">
        <span>Card Details</span>
        <div className="cards">
          <FaCcPaypal className="card-type" />
          <FaCcMastercard className="card-type" />
          <FaCcVisa className="card-type" />
        </div>
        <div className="payment-field payment-field-lg">
          <label htmlFor="">Name on card</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="payment-field payment-field-lg">
          <label htmlFor="">Card Number</label>
          <input type="text" placeholder="4242 4242 4242 4242" />
        </div>
        <div className="d-flex">
          <div className="payment-field ">
            <label htmlFor="">Expiration date</label>
            <input type="text" placeholder="12/24" />
          </div>
          <div className="payment-field ">
            <label htmlFor="">CVV</label>
            <input type="text" placeholder="Name" />
          </div>
        </div>
        <div className="d-flex flex-column w-100">
          <div className="total">
            <p>Subtotal</p> <p className="">${total}</p>
          </div>

          <div className="total">
            <p>Shipping</p>
            <p className="text-success">FREE</p>
          </div>
          <div className="total">
            <p>Total</p>
            <p className="lead">${total}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
