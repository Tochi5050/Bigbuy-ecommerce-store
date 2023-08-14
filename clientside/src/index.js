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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
