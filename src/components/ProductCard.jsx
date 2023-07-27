import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem({ productId: product.id, quantity: 1 }));
    toast.success(`Product ${product.title} added to the cart.`);
  };
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
      </div>

      <div className="card-body">
        <span className="card-title">{product.title}</span>
        <span>
          {product.description.length > 100
            ? product.description.slice(0, 100) + "..."
            : product.description}
        </span>
        <span className="price">${product.price}</span>

        <div className="rating">
          <RatingStars rating={product.rating} />
        </div>
        <div className="card-buttons">
          <button className="btn">
            <Link className="btn btn-warning" to={"/product/" + product.id}>
              Details
            </Link>
          </button>
          <button className="btn btn-primary " onClick={handleAddToCart}>
            Add to cart
            <i className="fas fa-shopping-cart ms-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
