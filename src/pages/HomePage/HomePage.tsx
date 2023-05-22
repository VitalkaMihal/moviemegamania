import React, { useEffect } from "react";
import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "routes";
import { MovieCard, ShowMore } from "components";
import { fetchMovies, selectMovies, useAppDispatch, useAppSelector } from "store";
import { MovieCards, StyledHomePage } from "./styles";

export const HomePage = () => {
  const { movies, isLoading, error } = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <StyledHomePage>
      {isLoading && <div>spinner</div>}
      {error && <div>{error}</div>}
      <MovieCards>
        {movies.map((movie) => (
          <Link key={movie.title} to={generatePath(ROUTE.DETAILS, { imdbID: movie.imdbID })}>
            <MovieCard poster={movie.poster} title={movie.title} type={movie.type} />
          </Link>
        ))}
      </MovieCards>
      <ShowMore />
      <Link to={ROUTE.SING_IN}>sing-in</Link>
      <Link to={ROUTE.SING_UP}>sing-up</Link>
      <Link to={ROUTE.RESET_PASSWORD}>reset-password</Link>
      <Link to={ROUTE.SEARCH}>search</Link>
    </StyledHomePage>
  );
};
