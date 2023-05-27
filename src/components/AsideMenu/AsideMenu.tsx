import React from "react";
import { useLocation } from "react-router-dom";
import { AllRightsReserved, AsideContainer, LinksContainer } from "./styles";
import { AsideLink } from "components";
import { Favorites, HomeIcon, Settings, Trends } from "assets";
import { ROUTE } from "routes";

export const AsideMenu = () => {
  const location = useLocation();

  return (
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
  );
};
