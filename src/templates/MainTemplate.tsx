import React from "react";
import { Favorites, HomeIcon, Settings, Trends } from "assets";
import { AsideLink, Header } from "components";
import { Outlet, useLocation } from "react-router-dom";
import { ROUTE } from "routes";
import {
  LinksContainer,
  StyledMainTemplate,
  MainContainer,
  AsideContainer,
  AllRightsReserved,
} from "./styles";

export const MainTemplate = () => {
  const location = useLocation();

  return (
    <StyledMainTemplate>
      <Header />
      <MainContainer>
        <AsideContainer>
          <LinksContainer>
            <AsideLink
              text="Home"
              icon={<HomeIcon />}
              pagination={location.pathname === `${ROUTE.HOME}`}
              routerLink={ROUTE.HOME}
            />
            <AsideLink
              text="Trends"
              icon={<Trends />}
              pagination={location.pathname === `/moviemegamania/${ROUTE.TRENDS}`}
              routerLink={ROUTE.TRENDS}
            />
            <AsideLink
              text="Favorites"
              icon={<Favorites />}
              pagination={location.pathname === `/moviemegamania/${ROUTE.FAVORITES}`}
              routerLink={ROUTE.FAVORITES}
            />
            <AsideLink
              text="Settings"
              icon={<Settings />}
              pagination={location.pathname === `/moviemegamania/${ROUTE.SETTINGS}`}
              routerLink={ROUTE.SETTINGS}
            />
          </LinksContainer>
          <AllRightsReserved>© All Rights Reserved</AllRightsReserved>
        </AsideContainer>
        <Outlet />
      </MainContainer>
    </StyledMainTemplate>
  );
};
