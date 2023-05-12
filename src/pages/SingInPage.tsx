import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";

export const SingInPage = () => {
  return (
    <div>
      <h1>SingInPage</h1>
      <Link to={ROUTE.HOME}>home</Link>
    </div>
  );
};
