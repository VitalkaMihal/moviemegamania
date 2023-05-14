import React from "react";
import { StyledAsideLink, IconLink, IconText } from "./styles";

interface AsideLinkProps {
  icon: any;
  text: string;
}

export const AsideLink = ({ icon, text }: AsideLinkProps) => {
  return (
    <StyledAsideLink>
      <IconLink>{icon}</IconLink>
      <IconText>{text}</IconText>
    </StyledAsideLink>
  );
};
