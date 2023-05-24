import { MovieCard } from "components";
import { MovieCards } from "pages";
import React, { useEffect } from "react";
import { generatePath } from "react-router-dom";
import { ROUTE } from "routes";
import { fetchTrends, selectFavorites, selectTrends, useAppDispatch, useAppSelector } from "store";

export const TrendsPage = () => {
  const { trends, isLoading, error } = useAppSelector(selectTrends);
  const { favoritesImdbID } = useAppSelector(selectFavorites);
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
          <MovieCard
            key={trend.title}
            movie={trend}
            isHome
            atFavorite={favoritesImdbID.includes(trend.imdbID)}
            routerLink={generatePath(ROUTE.DETAILS_ON_RECOMMENDATIONS, { imdbID: trend.imdbID })}
          />
        ))}
      </MovieCards>
    </div>
  );
};
