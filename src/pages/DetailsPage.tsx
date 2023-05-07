import React from "react";
import { Link, generatePath, useParams } from "react-router-dom";
import { ROUTE } from "routes";

export const DetailsPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
      <Link to={ROUTE.HOME}>home</Link>
    </div>
  );
};
