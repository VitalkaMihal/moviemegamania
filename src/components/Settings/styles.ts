import styled from "styled-components";
import { Colors, H2, Media } from "ui";

const StyledSettingsMenu = styled.div`
  width: calc(100% - 607px);
  color: ${Colors.White};
  ${Media.XXL} {
    width: 100%;
  }
`;

const HeaderMenu = styled.div`
  ${H2};
  margin: 40px 0 20px 0;
`;

const FormContainer = styled.form`
  display: flex;
  padding: 40px;
  border-radius: 10px;
  background-color: ${Colors.Dark};
  column-gap: 20px;
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 50%;
`;

export { StyledSettingsMenu, HeaderMenu, FormContainer, FormColumn };
