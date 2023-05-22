import styled from "styled-components";
import { Colors } from "ui";

const ContainerFavorites = styled.div`
  position: relative;
`;

const DeleteFromFavorites = styled.button`
  position: absolute;
  top: 20px;
  right: 60px;
  padding: 5px 13px;
  border-radius: 6px;
  background-color: ${Colors.Graphite};
`;

export { DeleteFromFavorites, ContainerFavorites };
