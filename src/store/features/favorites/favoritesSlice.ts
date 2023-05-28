import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DetailsMovie } from "types";

interface FavoritesState {
  favorites: DetailsMovie[];
  favoritesImdbID: string[];
}

const initialState: FavoritesState = {
  favorites: [],
  favoritesImdbID: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavoritesPage: (state, action: PayloadAction<DetailsMovie>) => {
      if (state.favoritesImdbID.indexOf(action.payload.imdbID) === -1) {
        state.favorites.push(action.payload);
        state.favoritesImdbID.push(action.payload.imdbID);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    setFavoritesPage: (state, action: PayloadAction<DetailsMovie[]>) => {
      state.favorites = action.payload;
    },
    deleteFromFavoritesPage: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((favorite) => favorite.imdbID !== action.payload);
      state.favoritesImdbID = state.favoritesImdbID.filter((imdb) => imdb !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavoritesPage, deleteFromFavoritesPage, setFavoritesPage } =
  favoritesSlice.actions;
