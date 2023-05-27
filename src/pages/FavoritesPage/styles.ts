import styled from "styled-components";
import { Colors, H1 } from "ui";

const ContainerFavorites = styled.div`
  position: relative;
`;

const TextSignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${H1};
  color: ${Colors.White};
  width: 100vh;
  height: 70vh;
`;

const ContainerEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 70vh;
`;

export { ContainerFavorites, ContainerEmpty, TextSignIn };
