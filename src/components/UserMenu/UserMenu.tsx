import React from "react";
import { StyledUserMenu, UserIconContainer, UserName, ArrowContainer } from "./styles";
import { ArrowRight, UserIcon } from "assets";
import { Colors } from "ui";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { selectUser, useAppSelector } from "store";

const linksStyle = {
  textDecoration: "none",
  color: `${Colors.White}`,
};

export interface UserMenuProps {
  isOpen?: boolean;
}

export const UserMenu = ({ isOpen }: UserMenuProps) => {
  const { isLogin } = useAppSelector(selectUser);
  return (
    <StyledUserMenu isOpen={isOpen}>
      <UserIconContainer>
        <UserIcon />
      </UserIconContainer>
      <UserName>
        {isLogin || (
          <Link style={linksStyle} to={ROUTE.SING_IN}>
            Sign In
          </Link>
        )}
        {isLogin && (
          <Link style={linksStyle} to={""}>
            Hello
          </Link>
        )}
      </UserName>
      <ArrowContainer>
        <ArrowRight />
      </ArrowContainer>
    </StyledUserMenu>
  );
};
