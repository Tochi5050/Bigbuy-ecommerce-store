import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ShippingScreen from "../Components/ShippingScreen";

const PrivateRoutes = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo ? <ShippingScreen /> : <Navigate to="/user" replace />;
};

export default PrivateRoutes;
