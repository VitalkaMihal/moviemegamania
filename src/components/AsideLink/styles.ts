import styled from "styled-components";
import { Colors, S1 } from "ui";

interface Pagination {
  pagination: boolean;
}

const StyledAsideLink = styled.div`
  display: grid;
  grid-template-rows: 30px;
  grid-template-columns: 30px 100px;
  color: ${Colors.Secondary};
`;

const IconLink = styled.div<Pagination>`
  align-self: center;
  justify-self: center;
  svg {
    path {
      fill: ${({ pagination }) => (pagination ? Colors.PrimaryDark : Colors.Secondary)};
    }
  }
`;

const IconText = styled.div<Pagination>`
  margin-left: 20px;
  ${S1};
  color: ${({ pagination }) => (pagination ? Colors.PrimaryDark : Colors.Secondary)};
`;

export { StyledAsideLink, IconLink, IconText };
