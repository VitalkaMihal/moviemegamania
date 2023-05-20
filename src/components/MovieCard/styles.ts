import styled from "styled-components";

const StyledMovieCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 266px;
  height: 429px;
  font-size: 16px;
  line-height: 24px;
  margin: 0 40px 40px 0;
`;

const Poster = styled.img`
  width: 100%;
  height: 357px;
  border-radius: 20px;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-weight: 700;
`;

const Type = styled.div``;

export { StyledMovieCard, Poster, Title, Type };
