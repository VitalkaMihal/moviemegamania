import styled from "styled-components";
import { Media } from "ui";

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  ${Media.MD} {
    justify-content: center;
  }
`;

export { MovieCards, StyledHomePage };
