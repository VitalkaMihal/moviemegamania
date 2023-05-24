import React, { useEffect } from "react";
import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "routes";
import { MovieCard, ShowMore } from "components";
import { fetchMovies, selectFavorites, selectMovies, useAppDispatch, useAppSelector } from "store";
import { MovieCards, StyledHomePage } from "./styles";

export const HomePage = () => {
  const { movies, isLoading, error } = useAppSelector(selectMovies);
  const { favoritesImdbID } = useAppSelector(selectFavorites);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <StyledHomePage>
      {error && <div>{error}</div>}
      <MovieCards>
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isHome
            atFavorite={favoritesImdbID.includes(movie.imdbID)}
            routerLink={generatePath(ROUTE.DETAILS, { imdbID: movie.imdbID })}
          />
        ))}
      </MovieCards>
      {isLoading && <div>spinner</div>}
      {isLoading || <ShowMore />}
      <Link to={ROUTE.SING_IN}>sing-in</Link>
      <Link to={ROUTE.SING_UP}>sing-up</Link>
      <Link to={ROUTE.RESET_PASSWORD}>reset-password</Link>
      <Link to={ROUTE.SEARCH}>search</Link>
    </StyledHomePage>
  );
};
