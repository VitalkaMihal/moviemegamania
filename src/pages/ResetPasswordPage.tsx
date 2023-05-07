import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";

export const ResetPasswordPage = () => {
  return (
    <div>
      <h1>ResetPasswordPage</h1>
      <Link to={ROUTE.HOME}>home</Link>
    </div>
  );
};
