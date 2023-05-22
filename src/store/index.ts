import moviesReducer, { fetchMovies, showMoreButton } from "./features/movies/moviesSlice";
import trendsReducer, { fetchTrends } from "./features/trends/trendsSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { selectMovies } from "./selectors/moviesSelectors";
import { store } from "./store";
import type { RootState, AppDispatch } from "./store";
import { selectTrends } from "./selectors/trendsSelectors";

export {
  trendsReducer,
  moviesReducer,
  fetchMovies,
  store,
  useAppSelector,
  useAppDispatch,
  RootState,
  AppDispatch,
  selectMovies,
  showMoreButton,
  selectTrends,
  fetchTrends,
};
