import styled from "styled-components";
import { Colors, Media, S3 } from "ui";

const StyledHeader = styled.div`
  position: sticky;
  z-index: 2;
  top: 0;
  display: flex;
  height: 156px;
  align-items: center;
  background-color: ${Colors.Black};
  overflow: hidden;
  ${Media.MD} {
    display: grid;
    height: 216px;
    padding: 40px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  ${Media.XXL} {
    width: 260px;
  }
  ${Media.MD} {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 300px);
  ${Media.XXL} {
    width: calc(100% - 260px);
  }
  ${Media.MD} {
    width: 100%;
  }
`;

const Back = styled.button`
  ${S3};
  color: ${Colors.White};
  background-color: ${Colors.Graphite};
  border-radius: 10px;
  padding: 10px;
  margin: 0 20px;
`;

const BurgerUserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -200px;
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: ${Colors.PrimaryDark};
  ${Media.XXL} {
    position: static;
  }
`;

export { StyledHeader, IconContainer, FormContainer, Back, BurgerUserContainer };
