import React, { useEffect, useState } from "react";
import { transformDetailsMovie } from "mappers";
import { useParams } from "react-router-dom";
import { DetailsMovie } from "types";
import { MovieCard } from "components";
import {
  StyledDetailsPage,
  AddToFavorite,
  MovieInfo,
  MovieTitle,
  GenreContainer,
  Genre,
  DotContainer,
} from "./styles";
import { Dot, Favorites } from "assets";

export const DetailsPage = () => {
  const { imdbID } = useParams();
  const [details, setDetails] = useState({} as DetailsMovie);
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=22808c07`)
      .then((response) => response.json())
      .then((response) => transformDetailsMovie(response))
      .then(setDetails);
  }, [imdbID]);
  return (
    <StyledDetailsPage>
      <MovieCard poster={details.poster}>
        <AddToFavorite>
          <Favorites />
        </AddToFavorite>
      </MovieCard>
      <MovieInfo>
        <GenreContainer>
          {details.genre?.split(", ").map((genre, genreNumber, genres) => (
            <Genre key={genre}>
              {genre}
              {genreNumber !== genres.length - 1 && (
                <DotContainer>
                  <Dot />
                </DotContainer>
              )}
            </Genre>
          ))}
        </GenreContainer>

        <MovieTitle>{details.title}</MovieTitle>
      </MovieInfo>
    </StyledDetailsPage>
  );
};
