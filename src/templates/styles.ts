import styled from "styled-components";
import { Colors, S3 } from "ui";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  color: ${Colors.Secondary};
  width: 95%;
  margin: 0 auto;
  padding: 0 40px;
`;

const LinksContainer = styled.div`
  position: sticky;
  top: 156px;
  width: 300px;
  display: grid;
  grid-template-columns: 150px;
  grid-template-rows: repeat(4, 30px);
  row-gap: 40px;
`;

const MainContainer = styled.div`
  display: flex;
`;

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const AllRightsReserved = styled.div`
  position: sticky;
  bottom: 64px;
`;

export { StyledMainTemplate, LinksContainer, MainContainer, AsideContainer, AllRightsReserved };
