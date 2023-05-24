import { MovieCard } from "components";
import React, { useEffect } from "react";
import { generatePath } from "react-router-dom";
import { ROUTE } from "routes";
import { fetchMovies, selectMovies, useAppDispatch, useAppSelector } from "store";
import { HeaderRecommendation, RecommendationsContainer, StyledRecommendations } from "./styles";

export const Recommendations = () => {
  const { movies, isLoading, error } = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <StyledRecommendations>
      <HeaderRecommendation>Recommendations</HeaderRecommendation>
      <RecommendationsContainer>
        {isLoading && <div>spinner</div>}
        {error && <div>{error}</div>}
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            routerLink={generatePath(ROUTE.DETAILS_ON_RECOMMENDATIONS, { imdbID: movie.imdbID })}
          />
        ))}
      </RecommendationsContainer>
    </StyledRecommendations>
  );
};
