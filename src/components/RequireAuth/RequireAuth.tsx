import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const RequireAuth = () => {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};
