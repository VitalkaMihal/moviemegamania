import { MovieCard } from "components";
import { MovieCards } from "pages";
import React from "react";
import { Link, generatePath } from "react-router-dom";
import { ROUTE } from "routes";
import { deleteFromFavoritesPage, selectFavorites, useAppDispatch, useAppSelector } from "store";
import { DeleteFromFavorites, ContainerFavorites } from "./styles";
import { Favorites } from "assets";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(selectFavorites);

  const dispatch = useAppDispatch();

  const handleDeleteFromFavorites = (e: any) => {
    console.log(e.target.key);
    dispatch(deleteFromFavoritesPage());
  };

  return (
    <div>
      <MovieCards>
        {favorites.map((favorite) => (
          <ContainerFavorites key={favorite.imdbID}>
            <Link to={generatePath(ROUTE.DETAILS_ON_RECOMMENDATIONS, { imdbID: favorite.imdbID })}>
              <MovieCard poster={favorite.poster} title={favorite.title} type={favorite.type} />
            </Link>
            <DeleteFromFavorites key={favorite.imdbID} onClick={handleDeleteFromFavorites}>
              <Favorites id={favorite.imdbID} />
            </DeleteFromFavorites>
          </ContainerFavorites>
        ))}
      </MovieCards>
    </div>
  );
};
