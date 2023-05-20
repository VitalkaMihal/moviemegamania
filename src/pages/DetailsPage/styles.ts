import styled from "styled-components";
import { BODY, Colors, H1 } from "ui";

const StyledDetailsPage = styled.div`
  display: flex;
  height: 100vh;
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

const RatingContainer = styled.div`
  display: inline-flex;
  margin: 26px auto 42px 0;
`;

const PlotContainer = styled.div`
  width: 70%;
`;

const MovieInfoContainer = styled.div`
  margin: 40px 0 56px 0;
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: repeat(8, 24px);
  column-gap: 20px;
`;

const MovieInfoName = styled.div`
  color: ${Colors.Light};
`;

const MovieInfoValue = styled.div`
  color: ${Colors.White};
`;

export {
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
};
