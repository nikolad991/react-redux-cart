import { useSelector } from "react-redux";
import QuantityChanger from "./QuantityChanger";

const CartItem = ({ productId }) => {
  const cartProduct = useSelector((state) =>
    state.products.find((product) => product.id === productId)
  );
  const quantity = useSelector(
    (state) => state.cart.find((item) => item.productId == productId).quantity
  );
  return (
    <div className="card rounded-3 mb-4">
      <div className="card-body p-4">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img
              src={cartProduct?.thumbnail}
              className="img-fluid h-100 w-100 rounded-3"
            />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <p className="lead fw-normal mb-2">{cartProduct?.title}</p>
          </div>
          <QuantityChanger
            productId={productId}
            cartItem={cartProduct}
            quantity={quantity}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
