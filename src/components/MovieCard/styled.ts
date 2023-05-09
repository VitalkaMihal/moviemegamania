import styled from "styled-components";

const StyledMovieCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 266px;
  height: 429px;
  font-size: 16px;
  line-height: 24px;
`;

const Poster = styled.img`
  width: 266px;
  height: 357px;
  border-radius: 20px;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-weight: 700;
`;

const Type = styled.div``;

export { StyledMovieCard, Poster, Title, Type };
