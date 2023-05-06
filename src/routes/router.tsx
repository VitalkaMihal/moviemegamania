import { DetailsPage, FavoritesPage, HomePage } from "pages";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainTemplate } from "templates";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path="details/:id" element={<DetailsPage />} />
      <Route path="favorites" element={<FavoritesPage />} />
    </Route>,
  ),
);
