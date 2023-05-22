import { MovieCard } from "components";
import { MovieCards } from "pages";
import React, { useEffect } from "react";
import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "routes";
import { fetchTrends, selectTrends, useAppDispatch, useAppSelector } from "store";

export const TrendsPage = () => {
  const { trends, isLoading, error } = useAppSelector(selectTrends);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTrends());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <div>spinner</div>}
      {error && <div>{error}</div>}
      <MovieCards>
        {trends.map((trend) => (
          <Link key={trend.title} to={generatePath(ROUTE.DETAILS, { imdbID: trend.imdbID })}>
            <MovieCard poster={trend.poster} title={trend.title} type={trend.type} />
          </Link>
        ))}
      </MovieCards>
    </div>
  );
};
