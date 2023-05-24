import styled from "styled-components";
import { Colors, S1 } from "ui";

const StyledAsideLink = styled.div`
  display: grid;
  grid-template-rows: 30px;
  grid-template-columns: 30px 100px;
  color: ${Colors.Secondary};
`;

const IconLink = styled.div`
  align-self: center;
  justify-self: center;
`;

const IconText = styled.div`
  margin-left: 20px;
  ${S1};
`;

export { StyledAsideLink, IconLink, IconText };
