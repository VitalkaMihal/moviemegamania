import styled from "styled-components";
import { Colors, H1 } from "ui";

const StyledFavoritesPage = styled.div`
  display: flex;
  width: 100%;
`;

const ContainerFavorites = styled.div`
  position: relative;
`;

const TextSignIn = styled.div`
  ${H1};
  color: ${Colors.White};
`;

const ContainerEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export { ContainerFavorites, ContainerEmpty, TextSignIn, StyledFavoritesPage };
