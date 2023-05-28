import { MovieCard } from "components";
import { MovieCards } from "pages";
import React from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTE } from "routes";
import {
  deleteFromFavoritesPage,
  selectFavorites,
  selectUser,
  useAppDispatch,
  useAppSelector,
} from "store";
import { ContainerEmpty, ContainerFavorites, StyledFavoritesPage, TextSignIn } from "./styles";
import { Empty } from "assets";
import { Back } from "components/Header/styles";

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(selectFavorites);
  const { isLogin } = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  const handleDeleteFromFavorites = (imdbID: string) => {
    dispatch(deleteFromFavoritesPage(imdbID));
  };

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/sing-in");
  };

  return (
    <StyledFavoritesPage>
      {isLogin || (
        <TextSignIn>
          Please login to see this page<Back onClick={handleSignIn}>Sign In</Back>
        </TextSignIn>
      )}
      {favorites.length === 0 && isLogin && (
        <ContainerEmpty>
          <Empty />
        </ContainerEmpty>
      )}
      {isLogin && favorites.length > 0 && (
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
      )}
    </StyledFavoritesPage>
  );
};
