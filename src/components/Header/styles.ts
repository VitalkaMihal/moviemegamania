import styled from "styled-components";
import { Colors } from "ui";

const StyledHeader = styled.div`
  position: sticky;
  z-index: 2;
  top: 0;
  display: flex;
  height: 156px;
  align-items: center;
  background-color: ${Colors.Black};
`;

const IconContainer = styled.div`
  width: 300px;
`;

export { StyledHeader, IconContainer };
