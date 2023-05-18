import styled from "styled-components";
import { BODY, Colors, H1 } from "ui";

const StyledDetailsPage = styled.div`
  display: flex;
  ${BODY};
  color: ${Colors.White};
`;

const AddToFavorite = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${Colors.Graphite};
  border-radius: 10px;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieTitle = styled.h1`
  ${H1};
`;

const GenreContainer = styled.div`
  display: flex;
`;

const Genre = styled.div`
  display: flex;
  color: ${Colors.Light};
`;

const DotContainer = styled.div`
  margin: -4px 8px 0 8px;
`;

export {
  StyledDetailsPage,
  AddToFavorite,
  MovieInfo,
  MovieTitle,
  GenreContainer,
  Genre,
  DotContainer,
};
