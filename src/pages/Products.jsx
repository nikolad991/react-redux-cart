import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { ToastContainer } from "react-toastify";
import Sidebar from "../components/Sidebar";

const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="">
      <div><Sidebar products={products} /></div>
      <div className="main p-5 gap-5 d-flex flex-wrap">
        {products?.map(
          (product, index) =>
            product && product.visible && <ProductCard key={index} product={product} />
        )}
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Products;
