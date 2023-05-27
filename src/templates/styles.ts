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
  ${Media.XXL} {
    position: absolute;
    left: -300px;
  }
`;

const AllRightsReserved = styled.div`
  position: sticky;
  bottom: 64px;
`;

export { StyledMainTemplate, LinksContainer, MainContainer, AsideContainer, AllRightsReserved };
