import styled from "styled-components";
import { Colors } from "ui";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.Black};
  color: ${Colors.Secondary};
`;

const LinksContainer = styled.div`
  margin: 0 186px 0 65px;
`;

const MainContainer = styled.div`
  display: flex;
`;

export { StyledMainTemplate, LinksContainer, MainContainer };
