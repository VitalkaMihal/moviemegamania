import React from "react";
import { StyledShowMore, ShowMoreText } from "./styles";
import { ShowMoreButton } from "assets";
import { fetchMovies, showMoreButton, useAppDispatch } from "store";

export const ShowMore = () => {
  const dispatch = useAppDispatch();
  const handleShowMore = () => {
    dispatch(showMoreButton());
    dispatch(fetchMovies());
  };
  return (
    <StyledShowMore onClick={handleShowMore}>
      <ShowMoreText>Show more </ShowMoreText>
      <ShowMoreButton />
    </StyledShowMore>
  );
};
