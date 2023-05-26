import React from "react";
import { StyledAsideLink, IconLink, IconText } from "./styles";
import { Link } from "react-router-dom";

interface AsideLinkProps {
  icon: any;
  text: string;
  routerLink: string;
  pagination: boolean;
}

const style = { textDecoration: "none" };

export const AsideLink = ({ icon, text, routerLink, pagination }: AsideLinkProps) => {
  return (
    <Link to={routerLink} style={style}>
      <StyledAsideLink>
        <IconLink pagination={pagination}>{icon}</IconLink>
        <IconText pagination={pagination}>{text}</IconText>
      </StyledAsideLink>
    </Link>
  );
};
