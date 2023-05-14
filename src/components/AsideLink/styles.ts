import styled from "styled-components";
import { Colors, S1 } from "ui";

const StyledAsideLink = styled.div`
  color: ${Colors.Secondary};
  display: flex;
  margin-bottom: 40px;
`;

const IconLink = styled.div`
  position: absolute;
`;

const IconText = styled.div`
  position: relative;
  padding-left: 40px;
  ${S1}
`;

export { StyledAsideLink, IconLink, IconText };
