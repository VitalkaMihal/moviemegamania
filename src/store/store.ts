import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer, trendsReducer, favoritesReducer, userReducer } from "store";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    trends: trendsReducer,
    favorites: favoritesReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
