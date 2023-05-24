import React from "react";
import { StyledShowMore } from "./styles";
import { fetchMovies, showMoreButton, useAppDispatch } from "store";

export const ShowMore = () => {
  const dispatch = useAppDispatch();
  const handleShowMore = () => {
    dispatch(showMoreButton());
    dispatch(fetchMovies());
  };
  return <StyledShowMore onClick={handleShowMore}>Show more</StyledShowMore>;
};
