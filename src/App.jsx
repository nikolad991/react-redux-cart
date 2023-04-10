import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import './index.css'
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // console.log(products);
  return (
    <div className="container p-5 gap-5 d-flex flex-wrap">
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default App;
