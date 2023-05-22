import styled from "styled-components";
import { Colors } from "ui";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.Black};
  color: ${Colors.Secondary};
`;

const LinksContainer = styled.div`
  position: sticky;
  top: 156px;
  margin: 0 186px 0 65px;
`;

const MainContainer = styled.div`
  display: flex;
`;

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AllRightsReserved = styled.div`
  position: sticky;
  bottom: 64px;
  margin-left: 65px;
`;

export { StyledMainTemplate, LinksContainer, MainContainer, AsideContainer, AllRightsReserved };
