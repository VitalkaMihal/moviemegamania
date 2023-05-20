import React, { ReactNode } from "react";
import { StyledBadge } from "./styles";

interface BadgeProps {
  children: ReactNode;
  color: string;
}

export const Badge = ({ children, color }: BadgeProps) => {
  return <StyledBadge color={color}>{children}</StyledBadge>;
};
