import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";

export const SearchPage = () => {
  return (
    <div>
      <h1>SearchPage</h1>
      <Link to={ROUTE.HOME}>home</Link>
    </div>
  );
};
