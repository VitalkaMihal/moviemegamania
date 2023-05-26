import styled from "styled-components";
import { Colors, S3 } from "ui";

const StyledHeader = styled.div`
  position: sticky;
  z-index: 2;
  top: 0;
  display: flex;
  height: 156px;
  align-items: center;
  background-color: ${Colors.Black};
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 300px);
`;

const Back = styled.button`
  ${S3};
  color: ${Colors.White};
  background-color: ${Colors.Graphite};
  border-radius: 10px;
  padding: 10px;
  margin: 0 20px;
`;

export { StyledHeader, IconContainer, FormContainer, Back };
