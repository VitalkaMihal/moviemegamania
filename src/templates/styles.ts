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

export { StyledMainTemplate, LinksContainer };
