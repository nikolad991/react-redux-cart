import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../redux/cartSlice";
import RatingStars from "./RatingStars";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://dummyjson.com/product/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleAddToCart = () => {
    dispatch(addItem({ productId: product.id, quantity: quantity }));
  };
  return (
    <main className="mt-5 pt-4">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 gallery">
            <div className="thumbnail">
              {product.images && (
                <img src={product.images[activeImage]} alt="" />
              )}
            </div>

            <div className="photos">
              {product.images &&
                product.images.map((image, index) => (
                  <div key={index} className="photo">
                    <img
                      src={image}
                      onClick={() => setActiveImage(index)}
                      alt=""
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="col-md-6 details py-4 px-5">
            <div className="d-flex flex-column">
              <a href="">
                <span className="badge bg-dark me-1">{product.category}</span>
              </a>

              <h1 className="title">{product.title}</h1>
              <p className="font-weight-bold">{product.brand}</p>
              <p>{product.description}</p>
            </div>
            <div className="rating align-self-start d-flex flex-column bg-dark p-2 rounded">
              <RatingStars rating={product.rating} />
              <span>Rating:{product.rating}</span>
            </div>

            <div className="price">
              <div className="d-flex align-items-center">
                <div className="final">${product.price}</div>
                <div className="discount">{product.discountPercentage}%</div>
              </div>
              <span className="me-4">
                <del>
                  $
                  {Math.round(
                    (product.price * (100 + product.discountPercentage)) / 100
                  )}
                </del>
              </span>
            </div>
            <div className="d-flex">
              <div className="quantity">
                <span
                  onClick={() => {
                    if (quantity != 1) setQuantity((prev) => prev - 1);
                  }}
                >
                  -
                </span>
                <span>{quantity}</span>
                <span onClick={() => setQuantity((prev) => prev + 1)}>+</span>
              </div>
              <button
                className="btn btn-primary ms-2 rounded"
                type="submit"
                onClick={handleAddToCart}
              >
                Add to cart
                <i className="fas fa-shopping-cart ms-1"></i>
              </button>
            </div>
          </div>
        </div>

        <hr />
      </div>
    </main>
  );
};

export default ProductDetail;
