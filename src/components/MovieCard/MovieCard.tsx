import React from "react";
import {
  AddToFavorite,
  DeleteFromFavorites,
  Poster,
  StyledMovieCard,
  Title,
  Type,
  OnFavorite,
} from "./styles";
import { DetailsMovie, Movie } from "types";
import { Favorites, dogy } from "assets";
import { Link } from "react-router-dom";
import { Colors } from "ui";

interface MovieCardProps {
  movie: Movie | DetailsMovie;
  routerLink: string;
  isHome?: boolean;
  isFavorite?: boolean;
  atFavorite?: boolean;
  isDetails?: boolean;
  onClick?: () => void;
}

const linksStyle = {
  textDecoration: "none",
  color: `${Colors.White}`,
};

export const MovieCard = ({
  movie,
  isFavorite,
  atFavorite,
  isDetails,
  isHome,
  routerLink,
  onClick,
}: MovieCardProps) => {
  return (
    <StyledMovieCard>
      <Link to={routerLink} style={linksStyle}>
        <Poster src={movie.poster === "N/A" ? dogy : movie.poster} alt="Poster" />
        {isHome && <Title>{movie.title}</Title>}
        {isHome && <Type>{movie.type}</Type>}
        {isDetails && (
          <AddToFavorite onClick={onClick} disabled={atFavorite}>
            <Favorites />
          </AddToFavorite>
        )}
      </Link>
      {isFavorite && (
        <DeleteFromFavorites onClick={onClick}>
          <Favorites />
        </DeleteFromFavorites>
      )}
      {atFavorite && (
        <OnFavorite>
          <Favorites />
        </OnFavorite>
      )}
    </StyledMovieCard>
  );
};
