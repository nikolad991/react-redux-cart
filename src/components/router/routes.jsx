import RouterLayout from "./RouterLayout";
import App from "../../App";
import ProductDetail from "../ProductDetail";
import Cart from "../Cart";

export const routes = [
  {
    path: "/",
    element: <RouterLayout />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "about",
    element: <h1>About</h1>,
  },
];
