import moviesReducer, { fetchMovies, showMoreButton } from "./features/movies/moviesSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { selectMovies } from "./selectors/moviesSelectors";
import { store } from "./store";
import type { RootState, AppDispatch } from "./store";
import TrendsReducer, { fetchTrends } from "./features/trends/trendsSlice";
import { selectTrends } from "./selectors/trendsSelectors";

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
  TrendsReducer,
  selectTrends,
  fetchTrends,
};
