import styled from "styled-components";
import { Colors } from "ui";

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  background: ${Colors.Graphite};
  border-radius: 10px;
`;

const ButtonFilter = styled.button`
  margin: 15px 22px;
  background: ${Colors.Graphite};
  border: none;
  :hover {
    opacity: 0.7;
  }
`;

export { StyledForm, ButtonFilter };
