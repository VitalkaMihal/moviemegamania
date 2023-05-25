import { RequireAuth } from "components";
import {
  SettingsPage,
  DetailsPage,
  FavoritesPage,
  HomePage,
  ResetPasswordPage,
  SearchPage,
  SingInPage,
  SingUpPage,
  TrendsPage,
} from "pages";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainTemplate } from "templates";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/moviemegamania" element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.DETAILS} element={<DetailsPage />} />
      <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
      <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
      <Route path={ROUTE.SEARCH} element={<SearchPage />} />
      <Route path={ROUTE.SING_IN} element={<SingInPage />} />
      <Route path={ROUTE.SING_UP} element={<SingUpPage />} />
      <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
      <Route element={<RequireAuth />}>
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
      </Route>
    </Route>,
  ),
);
