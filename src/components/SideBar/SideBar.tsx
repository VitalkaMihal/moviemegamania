import React, { ReactNode } from "react";
import { StyledSideBar } from "./styles";

interface SideBarProps {
  children: ReactNode;
}

export const SideBar = ({ children }: SideBarProps) => {
  return <StyledSideBar>{children}</StyledSideBar>;
};
