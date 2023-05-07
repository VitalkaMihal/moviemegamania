import { RequireAuth } from "components";
import { DetailsPage, FavoritesPage, HomePage } from "pages";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { MainTemplate } from "templates";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainTemplate />}>
      <Route path="details/:id" element={<DetailsPage />} />
      <Route path="details/:id" element={<DetailsPage />} />
      <Route path="details/:id" element={<DetailsPage />} />
      <Route path="details/:id" element={<DetailsPage />} />
      <Route index element={<HomePage />} />
      <Route path="details/:id" element={<DetailsPage />} />

      <Route path="details/:id" element={<DetailsPage />} />
      <Route element={<RequireAuth />}>
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
    </Route>,
  ),
);
