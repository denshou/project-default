import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import MainPage from "../pages/home/MainPage";
import ProductDetailPage from "../pages/detail/ProductDetailPage";
import CartPage from "../pages/cart/CartPage";
import LoginPage from "../pages/login/LoginPage";
import SignUpPage from "../pages/signup/SignUpPage";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "product/:productId",
        element: <ProductDetailPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

export default Routers;
