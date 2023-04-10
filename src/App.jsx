import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./redux/productsSlice";
function App() {
  // const [products, setProducts] = useState([]);
  const products = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data.products)));
  }, []);
  return (
    <div className="container p-5 gap-5 d-flex flex-wrap">
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default App;
