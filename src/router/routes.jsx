import RouterLayout from "./RouterLayout";
import App from "../App";
import ProductDetail from "../components/ProductDetail";
import Cart from "../pages/Cart";
import Products from "../pages/Products";

export const routes = [
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      { path: "/", element: <Products /> },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];
