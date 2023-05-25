import { MovieCard } from "components";
import { MovieCards } from "pages";
import React from "react";
import { generatePath } from "react-router-dom";
import { ROUTE } from "routes";
import { deleteFromFavoritesPage, selectFavorites, useAppDispatch, useAppSelector } from "store";
import { ContainerEmpty, ContainerFavorites } from "./styles";
import { Empty } from "assets";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(selectFavorites);

  const dispatch = useAppDispatch();

  const handleDeleteFromFavorites = (imdbID: string) => {
    dispatch(deleteFromFavoritesPage(imdbID));
  };

  return (
    <div>
      {favorites.length === 0 && (
        <ContainerEmpty>
          <Empty />
        </ContainerEmpty>
      )}
      <MovieCards>
        {favorites.map((favorite) => (
          <ContainerFavorites key={favorite.imdbID}>
            <MovieCard
              movie={favorite}
              isFavorite
              isHome
              onClick={() => handleDeleteFromFavorites(favorite.imdbID)}
              routerLink={generatePath(ROUTE.DETAILS_ON_RECOMMENDATIONS, {
                imdbID: favorite.imdbID,
              })}
            />
          </ContainerFavorites>
        ))}
      </MovieCards>
    </div>
  );
};
