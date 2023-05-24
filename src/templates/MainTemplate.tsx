import React from "react";
import { Favorites, HomeIcon, Settings, Trends } from "assets";
import { AsideLink, Header } from "components";
import { Outlet } from "react-router-dom";
import { ROUTE } from "routes";
import {
  LinksContainer,
  StyledMainTemplate,
  MainContainer,
  AsideContainer,
  AllRightsReserved,
} from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <MainContainer>
        <AsideContainer>
          <LinksContainer>
            <AsideLink text="Home" icon={<HomeIcon />} routerLink={ROUTE.HOME} />
            <AsideLink text="Trends" icon={<Trends />} routerLink={ROUTE.TRENDS} />
            <AsideLink text="Favorites" icon={<Favorites />} routerLink={ROUTE.FAVORITES} />
            <AsideLink text="Settings" icon={<Settings />} routerLink={ROUTE.SETTINGS} />
          </LinksContainer>
          <AllRightsReserved>© All Rights Reserved</AllRightsReserved>
        </AsideContainer>
        <Outlet />
      </MainContainer>
    </StyledMainTemplate>
  );
};
