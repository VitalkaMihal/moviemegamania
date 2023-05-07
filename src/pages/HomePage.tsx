import React from "react";
import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "routes";

export const HomePage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>HomePage</h1>
      <Link to={ROUTE.FAVORITES}>favorites</Link>
      <Link to={ROUTE.SING_IN}>sing-in</Link>
      <Link to={ROUTE.SING_UP}>sing-up</Link>
      <Link to={ROUTE.RESET_PASSWORD}>reset-password</Link>
      <Link to={ROUTE.TRENDS}>trends</Link>
      <Link to={ROUTE.SEARCH}>search</Link>
      <Link to={ROUTE.ACCOUNT}>account</Link>
      <Link to={generatePath(ROUTE.DETAILS, { movie: "42" })}>
        <h1>DetailsPage</h1>
      </Link>
    </div>
  );
};
