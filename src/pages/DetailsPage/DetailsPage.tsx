import React, { useEffect, useState } from "react";
import { transformDetailsMovie } from "mappers";
import { useParams } from "react-router-dom";
import { DetailsMovie } from "types";
import { Badge, MovieCard, Recommendations } from "components";
import { addToFavoritesPage, selectFavorites, useAppDispatch, useAppSelector } from "store";
import {
  StyledDetailsPage,
  MovieInfo,
  MovieTitle,
  GenreContainer,
  Genre,
  DotContainer,
  RatingContainer,
  PlotContainer,
  MovieInfoContainer,
  Name,
  Value,
} from "./styles";
import { Dot } from "assets";
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

  const {
    title,
    imdbRating,
    runtime,
    plot,
    year,
    released,
    boxOffice,
    country,
    production,
    actors,
    director,
    writer,
  } = details;

  const dispatch = useAppDispatch();

  const handleFavorites = () => {
    dispatch(addToFavoritesPage(details));
  };

  return (
    <StyledDetailsPage>
      <MovieCard
        movie={details}
        isDetails
        atFavorite={favoritesImdbID.includes(details.imdbID)}
        onClick={handleFavorites}
        routerLink={""}
      />
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
        <MovieTitle>{title}</MovieTitle>
        <RatingContainer>
          <Badge color={Colors.Green}>{imdbRating}</Badge>
          <Badge color={Colors.Graphite}>IMDb {imdbRating}</Badge>
          <Badge color={Colors.Graphite}>{runtime}</Badge>
        </RatingContainer>
        <PlotContainer>{plot}</PlotContainer>
        <MovieInfoContainer>
          <Name>Year</Name>
          <Value>{year}</Value>
          <Name>Released</Name>
          <Value>{released}</Value>
          <Name>BoxOffice</Name>
          <Value>{boxOffice}</Value>
          <Name>Country</Name>
          <Value>{country}</Value>
          <Name>Production</Name>
          <Value>{production}</Value>
          <Name>Actors</Name>
          <Value>{actors}</Value>
          <Name>Director</Name>
          <Value>{director}</Value>
          <Name>Writers</Name>
          <Value>{writer}</Value>
        </MovieInfoContainer>
        <Recommendations />
      </MovieInfo>
    </StyledDetailsPage>
  );
};