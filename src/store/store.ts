import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer, trendsReducer, favoritesReducer } from "store";

export const store = configureStore({
  reducer: { movies: moviesReducer, trends: trendsReducer, favorites: favoritesReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
