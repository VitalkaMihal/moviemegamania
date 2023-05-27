import styled from "styled-components";
import { BODY, Colors, H1, Media } from "ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDetailsPage = styled.div`
  display: flex;
  ${BODY};
  color: ${Colors.White};
  ${Media.MD} {
    flex-direction: column;
    align-items: center;
  }
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
`;

const MovieTitle = styled.h1`
  ${H1};
`;

const GenreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  grid-template-rows: repeat(8, auto);
  row-gap: 20px;
  ${Media.MD} {
    grid-template-columns: 1fr 4fr;
    row-gap: 10px;
    column-gap: 10px;
  }
`;

const Name = styled.div`
  color: ${Colors.Light};
`;

const Value = styled.div`
  color: ${Colors.White};
`;

export {
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
  Container,
};
