import React from "react";
import { Poster, StyledMovieCard, Title, Type } from "./styled";

export const MovieCard = ({ poster, title, type }: any) => {
  return (
    <StyledMovieCard>
      <Poster src={poster} alt="Poster" />
      <Title>{title}</Title>
      <Type>{type}</Type>
    </StyledMovieCard>
  );
};
