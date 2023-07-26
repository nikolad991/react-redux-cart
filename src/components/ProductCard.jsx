import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem({ productId: product.id, quantity: 1 }));
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

        {/* <div className="card-text text-center">
          <Link className="btn btn-warning mb-3" to={"/product/" + product.id}>
            Details
          </Link>
          <p>{product.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Brand: {product.brand}</li>
          <li className="list-group-item">Price: {product.price} $</li>
          <li className="list-group-item">Rating: {product.rating} *</li>
        </ul> */}
      </div>

      {/* <div className="card-body">
         {product.images.map((image, index) => (
          <img
            onClick={() => setPictureNumber(index)}
            src={image}
            alt=""
            width={"100px"}
            key={index}
            loading="lazy"
          />
        ))} 
      </div> */}
    </div>
  );
};

export default ProductCard;
