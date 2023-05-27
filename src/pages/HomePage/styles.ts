import styled from "styled-components";
import { Media } from "ui";

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieCards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 40px;
  column-gap: 40px;
  ${Media.MD} {
    justify-content: center;
  }
`;

export { MovieCards, StyledHomePage };
