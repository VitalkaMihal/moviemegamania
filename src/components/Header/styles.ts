import styled from "styled-components";
import { Colors } from "ui";

const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  height: 156px;
  align-items: center;
  background-color: ${Colors.Black};
`;

const IconContainer = styled.div`
  margin: 0 146px 0 64px;
`;

export { StyledHeader, IconContainer };
