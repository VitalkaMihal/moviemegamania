import moviesReducer, { fetchMovies, showMoreButton } from "./features/movies/moviesSlice";
import trendsReducer, { fetchTrends } from "./features/trends/trendsSlice";
import userReducer, { fetchSignInUser, fetchSignUpUser } from "./features/user/userSlice";
import searchReducer, { fetchSearch } from "./features/search/searchSlice";
import favoritesReducer, {
  addToFavoritesPage,
  deleteFromFavoritesPage,
  setFavoritesPage,
} from "./features/favorites/favoritesSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { selectMovies } from "./selectors/moviesSelectors";
import { store } from "./store";
import type { RootState, AppDispatch } from "./store";
import { selectTrends } from "./selectors/trendsSelectors";
import { selectFavorites } from "./selectors/favoritesSelectors";
import { selectSearch } from "./selectors/searchSelectors";
import { selectUser } from "./selectors/userSelectors";

export {
  trendsReducer,
  moviesReducer,
  favoritesReducer,
  userReducer,
  searchReducer,
  fetchMovies,
  fetchSearch,
  fetchSignUpUser,
  fetchSignInUser,
  store,
  useAppSelector,
  useAppDispatch,
  RootState,
  AppDispatch,
  selectMovies,
  showMoreButton,
  selectTrends,
  fetchTrends,
  selectFavorites,
  addToFavoritesPage,
  deleteFromFavoritesPage,
  selectSearch,
  selectUser,
  setFavoritesPage,
};
