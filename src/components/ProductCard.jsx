import React, { useState } from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const [pictureNumber, setPictureNumber] = useState(0);
  return (
    <div className="card product-card">
      <img
        className="card-img-top"
        src={product.images[pictureNumber]}
        alt="Card image cap"
        loading="lazy"
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>

        <div className="card-text text-center">
          <Link className="btn btn-warning mb-3" to={"/product/" + product.id}>
            Details
          </Link>

          <p>{product.description}</p>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Brand: {product.brand}</li>
        <li className="list-group-item">Price: {product.price} $</li>
        <li className="list-group-item">Rating: {product.rating} *</li>
      </ul>
      <div className="card-body">
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
      </div>
    </div>
  );
};

export default ProductCard;
