import React from "react";
import { Link, Route } from "react-router-dom";
import { ROUTE } from "routes";

export const FavoritesPage = () => {
  return (
    <div>
      <h1>FavoritesPage</h1>
      <Link to={ROUTE.HOME}>home</Link>
    </div>
  );
};
