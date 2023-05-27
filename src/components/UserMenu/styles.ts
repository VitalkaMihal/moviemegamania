import styled from "styled-components";
import { Colors, Media, S3 } from "ui";

const StyledUserMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 267px;
  ${Media.XXL} {
    position: absolute;
    right: -400px;
  }
`;

const UserIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: ${Colors.PrimaryDark};
`;

const UserName = styled.div`
  align-self: center;
  ${S3};
  color: ${Colors.White};
`;

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
`;

export { StyledUserMenu, UserIconContainer, UserName, ArrowContainer };
