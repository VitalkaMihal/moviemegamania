import React from "react";
import { generatePath } from "react-router-dom";
import { ROUTE } from "routes";
import { MovieCard } from "components";
import { selectFavorites, selectSearch, useAppSelector } from "store";
import { MovieCards, StyledHomePage } from "pages";

export const SearchPage = () => {
  const { movies, isLoading, error } = useAppSelector(selectSearch);
  const { favoritesImdbID } = useAppSelector(selectFavorites);

  return (
    <StyledHomePage>
      {error && <div>{error}</div>}
      {isLoading && <div>spinner</div>}
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
    </StyledHomePage>
  );
};
