import React from "react";
import { StyledUserMenu, UserIconContainer, UserName, ArrowContainer } from "./styles";
import { ArrowRight, UserIcon } from "assets";
import { Colors } from "ui";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";

const linksStyle = {
  textDecoration: "none",
  color: `${Colors.White}`,
};

export const UserMenu = () => {
  return (
    <StyledUserMenu>
      <UserIconContainer>
        <UserIcon />
      </UserIconContainer>
      <UserName>
        <Link style={linksStyle} to={ROUTE.SING_IN}>
          Sign In
        </Link>
      </UserName>
      <ArrowContainer>
        <ArrowRight />
      </ArrowContainer>
    </StyledUserMenu>
  );
};
