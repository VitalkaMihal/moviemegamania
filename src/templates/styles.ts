import styled from "styled-components";
import { Colors } from "ui";

const StyledMainTemplate = styled.div`
  display: flex;
  background-color: ${Colors.Black};
  color: ${Colors.Secondary};
`;

const LinksContainer = styled.div`
  margin-top: 64px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export { StyledMainTemplate, LinksContainer, MainContainer };
