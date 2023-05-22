import moviesReducer, { fetchMovies, showMoreButton } from "./features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { selectMovies } from "./selectors/moviesSelectors";
import { store } from "./store";
import type { RootState, AppDispatch } from "./store";

export {
  moviesReducer,
  fetchMovies,
  store,
  useAppSelector,
  useAppDispatch,
  RootState,
  AppDispatch,
  selectMovies,
  showMoreButton,
};
