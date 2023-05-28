import React from "react";
import { AsideMenu, Header } from "components";
import { Outlet } from "react-router-dom";
import { StyledMainTemplate, MainContainer } from "./styles";
import { useWindowSize } from "hooks";
import { ScrollToTop } from "services";

export const MainTemplate = () => {
  const { width = 0 } = useWindowSize();
  const isTablet = width < 1440;

  return (
    <StyledMainTemplate>
      <ScrollToTop />
      <Header />
      <MainContainer>
        {isTablet || <AsideMenu />}
        <Outlet />
      </MainContainer>
    </StyledMainTemplate>
  );
};
