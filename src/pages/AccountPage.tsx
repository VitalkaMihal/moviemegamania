import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";

export const AccountPage = () => {
  return (
    <div>
      <h1>AccountPage</h1>
      <Link to={ROUTE.HOME}>home</Link>
    </div>
  );
};
