import React from "react";
import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "routes";

export const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to={ROUTE.FAVORITES}>favorites</Link>
      <Link to={generatePath(ROUTE.DETAILS, { movie: "42" })}>
        <h1>DetailsPage</h1>
      </Link>
    </div>
  );
};
