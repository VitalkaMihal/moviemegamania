import styled from "styled-components";

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
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

const AllRightsReserved = styled.div`
  position: sticky;
  bottom: 64px;
`;

export { AsideContainer, AllRightsReserved, LinksContainer };
