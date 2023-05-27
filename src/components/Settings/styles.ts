import styled from "styled-components";
import { Colors, H2, Media } from "ui";

const StyledSettingsMenu = styled.div`
  width: calc(100% - 607px);
  ${Media.XXL} {
    width: 100%;
  }
`;

const HeaderMenu = styled.div`
  ${H2};
  color: ${Colors.White};
`;

export { StyledSettingsMenu, HeaderMenu };
