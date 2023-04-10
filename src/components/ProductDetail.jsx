import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../redux/cartSlice";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://dummyjson.com/product/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log(product.id);
    dispatch(addItem({ productId: product.id, quantity: quantity }));
  };
  return (
    <main className="mt-5 pt-4">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img src={product.thumbnail} className="img-fluid" alt="" />
          </div>

          <div className="col-md-6 mb-4">
            <div className="p-4">
              <div className="mb-3">
                <a href="">
                  <span className="badge bg-dark me-1">{product.category}</span>
                </a>
                <a href="">
                  <span className="badge bg-info me-1">New</span>
                </a>
                <a href="">
                  <span className="badge bg-danger me-1">Bestseller</span>
                </a>
              </div>

              <p className="lead">
                <span className="me-4">
                  <del>
                    $
                    {Math.round(
                      (product.price * (100 + product.discountPercentage)) / 100
                    )}
                  </del>
                </span>
                <span>${product.price}</span>
              </p>

              <strong>
                <p style={{ fontSize: "20px" }}>{product.title}</p>
              </strong>

              <p>{product.description}</p>

              <form
                className="d-flex justify-content-left"
                onSubmit={handleAddToCart}
              >
                <div className="form-outline me-1" style={{ width: "100px" }}>
                  <input
                    type="number"
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                    value={quantity}
                    min="1"
                    className="form-control"
                  />
                </div>
                <button className="btn btn-primary ms-1" type="submit">
                  Add to cart
                  <i className="fas fa-shopping-cart ms-1"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        <hr />

        <div className="row d-flex justify-content-center">
          <div className="col-md-6 text-center">
            <h4 className="my-4 h4">Photos</h4>
          </div>
        </div>

        <div className="row">
          {product.images &&
            product.images.map((image, index) => (
              <div key={index} className="col-lg-4 col-md-12 mb-4">
                <img
                  src={image}
                  className="img-fluid"
                  style={{ height: "200px" }}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
