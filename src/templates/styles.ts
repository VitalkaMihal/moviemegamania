import styled from "styled-components";
import { Colors, Media } from "ui";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  color: ${Colors.Secondary};
  width: 95%;
  margin: 0 auto;
  padding: 0 40px;
  ${Media.XXL} {
    padding: 0 20px;
  }
`;

const MainContainer = styled.div`
  display: flex;
`;

export { StyledMainTemplate, MainContainer };
