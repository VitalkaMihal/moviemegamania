import styled from "styled-components";
import { Colors } from "ui";

const StyledShowMore = styled.button`
  display: flex;
  margin: 64px auto;
  padding: 8px 24px;
  color: ${Colors.White};
  background-color: ${Colors.Graphite};
  border-radius: 40px;
  border: none;
  :hover {
  }
  svg {
    height: 16px;
  }
`;

const ShowMoreText = styled.div`
  margin-right: 12px;
`;

export { StyledShowMore, ShowMoreText };
