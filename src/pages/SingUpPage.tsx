import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";

export const SingUpPage = () => {
  return (
    <div>
      <h1>SingUpPage</h1>
      <Link to={ROUTE.HOME}>home</Link>
    </div>
  );
};
