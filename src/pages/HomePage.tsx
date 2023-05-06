import React from "react";
import { Link, generatePath } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to={"favorites"}>favorites</Link>
      <Link to={generatePath("/details/:id", { id: "42" })}>
        <h1>DetailsPage</h1>
      </Link>
    </div>
  );
};
