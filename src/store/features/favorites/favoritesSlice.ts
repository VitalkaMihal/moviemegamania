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
      }
    },
    deleteFromFavoritesPage: (state) => {
      state.favorites.filter(() => true);
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavoritesPage, deleteFromFavoritesPage } = favoritesSlice.actions;
