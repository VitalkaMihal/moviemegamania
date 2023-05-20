import styled from "styled-components";

const StyledBadge = styled.div<{ color: string }>`
  margin-right: 20px;
  padding: 2px 8px;
  background-color: ${(props) => props.color};
  border-radius: 6px;
`;

export { StyledBadge };
