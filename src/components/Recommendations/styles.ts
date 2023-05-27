import styled from "styled-components";
import { Colors, H2, Media } from "ui";

const StyledRecommendations = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const HeaderRecommendation = styled.div`
  ${H2}
  margin: 20px auto;
  color: ${Colors.White};
`;

const RecommendationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  ${Media.MD} {
    flex-direction: column;
    align-items: center;
  }
`;

export { StyledRecommendations, RecommendationsContainer, HeaderRecommendation };
