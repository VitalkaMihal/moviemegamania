import React from "react";
import { StyledAsideLink, IconLink, IconText } from "./styles";
import { Link } from "react-router-dom";

interface AsideLinkProps {
  icon: any;
  text: string;
  routerLink: string;
}

export const AsideLink = ({ icon, text, routerLink }: AsideLinkProps) => {
  return (
    <Link to={routerLink} style={{ textDecoration: "none" }}>
      <StyledAsideLink>
        <IconLink>{icon}</IconLink>
        <IconText>{text}</IconText>
      </StyledAsideLink>
    </Link>
  );
};
