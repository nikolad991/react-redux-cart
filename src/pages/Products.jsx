import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const products = useSelector((state) => state.products);
  return (
    <div className="main p-5 gap-5 d-flex flex-wrap">
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
