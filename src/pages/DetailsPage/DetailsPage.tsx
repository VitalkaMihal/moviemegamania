import React, { useEffect, useState } from "react";
import { transformDetailsMovie } from "mappers";
import { useParams } from "react-router-dom";
import { DetailsMovie } from "types";
import { Badge, MovieCard, Recommendations } from "components";
import { addToFavoritesPage, selectFavorites, useAppDispatch, useAppSelector } from "store";
import {
  StyledDetailsPage,
  AddToFavorite,
  MovieInfo,
  MovieTitle,
  GenreContainer,
  Genre,
  DotContainer,
  RatingContainer,
  PlotContainer,
  MovieInfoContainer,
  MovieInfoName,
  MovieInfoValue,
} from "./styles";
import { Dot, Favorites } from "assets";
import { Colors } from "ui";

export const DetailsPage = () => {
  const { imdbID } = useParams();
  const [details, setDetails] = useState({} as DetailsMovie);
  const { favoritesImdbID } = useAppSelector(selectFavorites);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=22808c07`)
      .then((response) => response.json())
      .then((response) => transformDetailsMovie(response))
      .then(setDetails);
  }, [imdbID]);

  const dispatch = useAppDispatch();

  const handleFavorites = () => {
    dispatch(addToFavoritesPage(details));
  };

  return (
    <StyledDetailsPage>
      <MovieCard poster={details.poster}>
        <AddToFavorite
          onClick={handleFavorites}
          imdbID={details.imdbID}
          favoritesImdbID={favoritesImdbID}
        >
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
        <RatingContainer>
          <Badge color={Colors.Green}>{details.imdbRating}</Badge>
          <Badge color={Colors.Graphite}>IMDb {details.imdbRating}</Badge>
          <Badge color={Colors.Graphite}>{details.runtime}</Badge>
        </RatingContainer>
        <PlotContainer>{details.plot}</PlotContainer>
        <MovieInfoContainer>
          <MovieInfoName>Year</MovieInfoName>
          <MovieInfoValue>{details.year}</MovieInfoValue>
          <MovieInfoName>Released</MovieInfoName>
          <MovieInfoValue>{details.released}</MovieInfoValue>
          <MovieInfoName>BoxOffice</MovieInfoName>
          <MovieInfoValue>{details.boxOffice}</MovieInfoValue>
          <MovieInfoName>Country</MovieInfoName>
          <MovieInfoValue>{details.country}</MovieInfoValue>
          <MovieInfoName>Production</MovieInfoName>
          <MovieInfoValue>{details.production}</MovieInfoValue>
          <MovieInfoName>Actors</MovieInfoName>
          <MovieInfoValue>{details.actors}</MovieInfoValue>
          <MovieInfoName>Director</MovieInfoName>
          <MovieInfoValue>{details.director}</MovieInfoValue>
          <MovieInfoName>Writers</MovieInfoName>
          <MovieInfoValue>{details.writer}</MovieInfoValue>
        </MovieInfoContainer>
        <Recommendations />
      </MovieInfo>
    </StyledDetailsPage>
  );
};
