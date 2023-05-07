import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const RequireAuth = () => {
  const isAuth = false;
  return isAuth ? <Outlet /> : <Navigate to={"/"} />;
};
