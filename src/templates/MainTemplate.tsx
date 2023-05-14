import { Favorites, HomeIcon, PixemaDark, Settings, Trends } from "assets";
import { AsideLink, SideBar } from "components";
import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ROUTE } from "routes";
import { LinksContainer, StyledMainTemplate } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <SideBar>
        <PixemaDark />
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
      </SideBar>
      <>
        <Outlet />
      </>
    </StyledMainTemplate>
  );
};
