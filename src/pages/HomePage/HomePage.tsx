import { MovieCard } from "components";
import React, { useEffect } from "react";
import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "routes";
import { fetchMovies, selectMovies, useAppDispatch, useAppSelector } from "store";
import { StyledMovieCard } from "./styles";

export const HomePage = () => {
  const { movies, isLoading, error } = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <div>spinner</div>}
      {error && <div>{error}</div>}
      <StyledMovieCard>
        {movies.map((movie) => (
          <div key={movie.title}>
            <MovieCard poster={movie.poster} title={movie.title} type={movie.type} />
          </div>
        ))}
      </StyledMovieCard>
      <Link to={ROUTE.SING_IN}>sing-in</Link>
      <Link to={ROUTE.SING_UP}>sing-up</Link>
      <Link to={ROUTE.RESET_PASSWORD}>reset-password</Link>
      <Link to={ROUTE.SEARCH}>search</Link>
      <Link to={generatePath(ROUTE.DETAILS, { movie: "42" })}>
        <h1>DetailsPage</h1>
      </Link>
    </div>
  );
};
