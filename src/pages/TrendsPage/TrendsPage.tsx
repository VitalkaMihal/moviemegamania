import { MovieCard } from "components";
import { MovieCards } from "pages";
import React, { useEffect } from "react";
import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "routes";
import { fetchTrends, selectTrends, useAppDispatch, useAppSelector } from "store";

export const TrendsPage = () => {
  const { movies, isLoading, error } = useAppSelector(selectTrends);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTrends());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <div>spinner</div>}
      {error && <div>{error}</div>}
      <MovieCards>
        {movies.map((movie) => (
          <Link key={movie.title} to={generatePath(ROUTE.DETAILS, { imdbID: movie.imdbID })}>
            <MovieCard poster={movie.poster} title={movie.title} type={movie.type} />
          </Link>
        ))}
      </MovieCards>
    </div>
  );
};
