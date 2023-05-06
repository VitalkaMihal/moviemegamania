import { FavoritesPage, HomePage } from "pages";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="favorites" element={<FavoritesPage />} />
    </>,
  ),
);
