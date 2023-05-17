import React from "react";
import { Favorites, HomeIcon, Settings, Trends } from "assets";
import { AsideLink, Header } from "components";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ROUTE } from "routes";
import { LinksContainer, StyledMainTemplate, MainContainer } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <MainContainer>
        <LinksContainer>
          <Link to={ROUTE.HOME}>
            {" "}
            <AsideLink text="Home" icon={<HomeIcon />} />
          </Link>
          <Link to={ROUTE.TRENDS}>
            {" "}
            <AsideLink text="Trends" icon={<Trends />} />
          </Link>
          <Link to={ROUTE.FAVORITES}>
            <AsideLink text="Favorites" icon={<Favorites />} />
          </Link>
          <Link to={ROUTE.SETTINGS}>
            {" "}
            <AsideLink text="Settings" icon={<Settings />} />
          </Link>
        </LinksContainer>
        <Outlet />
      </MainContainer>
    </StyledMainTemplate>
  );
};
