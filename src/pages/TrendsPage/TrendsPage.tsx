import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";

export const TrendsPage = () => {
  return (
    <div>
      <h1>TrendsPage</h1>
      <Link to={ROUTE.HOME}>home</Link>
    </div>
  );
};
