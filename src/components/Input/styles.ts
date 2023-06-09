import styled from "styled-components";
import { Colors, S1 } from "ui";

const StyledInput = styled.input`
  height: 56px;
  background: ${Colors.Graphite};
  border-radius: 10px;
  border: none;
  width: 100%;
  ${S1};
  color: ${Colors.Secondary};
  padding-left: 20px;
  :focus {
    outline: none !important;
  }
`;

export { StyledInput };
