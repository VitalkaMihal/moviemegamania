import styled from "styled-components";
import { Colors, Media } from "ui";

const StyledForm = styled.form`
  display: flex;
  height: 56px;
  width: calc(100% - 307px);
  background: ${Colors.Graphite};
  border-radius: 10px;
  ${Media.XXL} {
    width: calc(100% - 106px);
  }
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
