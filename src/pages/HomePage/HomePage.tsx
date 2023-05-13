import { MovieCard } from "components";
import React, { useEffect } from "react";
import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "routes";
import { fetchMovies, selectMovies, useAppDispatch, useAppSelector } from "store";

export const HomePage = () => {
  const { movies, isLoading, error } = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>HomePage</h1>
      {isLoading && <div>spinner</div>}
      {error && <div>{error}</div>}
      <>
        {movies.map((movie) => (
          <div key={movie.title}>
            <MovieCard poster={movie.poster} title={movie.title} type={movie.type} />
          </div>
        ))}
      </>
      <Link to={ROUTE.FAVORITES}>favorites</Link>
      <Link to={ROUTE.SING_IN}>sing-in</Link>
      <Link to={ROUTE.SING_UP}>sing-up</Link>
      <Link to={ROUTE.RESET_PASSWORD}>reset-password</Link>
      <Link to={ROUTE.TRENDS}>trends</Link>
      <Link to={ROUTE.SEARCH}>search</Link>
      <Link to={ROUTE.SETTINGS}>account</Link>
      <Link to={generatePath(ROUTE.DETAILS, { movie: "42" })}>
        <h1>DetailsPage</h1>
      </Link>
    </div>
  );
};
