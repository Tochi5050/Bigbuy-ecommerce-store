import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginScreen from "./Components/LoginScreen";
import RegisterScreen from "./Components/RegisterScreen";
import ProductDetailScreen from "./SupportComponents/ProductDetailScreen";
import store from "./Redux/redux-store";
import { Provider } from "react-redux";
import CartScreen from "./Components/CartScreen";
import ShippingScreen from "./Components/ShippingScreen";
import PaymentDetails from "./Components/PaymentDetails";
import PrivateRoutes from "./SupportComponents/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: <LoginScreen />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "/product/:id",
    element: <ProductDetailScreen />,
  },
  {
    path: "/cart",
    element: <CartScreen />,
  },
  {
    path: "/:shipping",
    element: <PrivateRoutes />,
  },
  {
    path: "/:payment",
    element: <PaymentDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
