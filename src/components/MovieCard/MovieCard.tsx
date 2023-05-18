import React, { ReactNode } from "react";
import { Poster, StyledMovieCard, Title, Type } from "./styles";

interface MovieCardProps {
  poster: string;
  title?: string;
  type?: string;
  children?: ReactNode;
}

export const MovieCard = ({ poster, title, type, children }: MovieCardProps) => {
  return (
    <StyledMovieCard>
      <Poster src={poster} alt="Poster" />
      {children}
      <Title>{title}</Title>
      <Type>{type}</Type>
    </StyledMovieCard>
  );
};
