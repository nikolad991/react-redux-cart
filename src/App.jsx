import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/productsSlice";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./router/routes";
const router = createBrowserRouter(routes);
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data.products)));
  }, []);
  // console.log(products);

  return <RouterProvider router={router} />;
}

export default App;
