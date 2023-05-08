import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface MoviesState {
  movies: any[];
}

export const fetchMovies: any = createAsyncThunk("movies/fetchMovies", async () => {
  const { searchMovies }: { searchMovies: any } = await axios.get(
    "https://www.omdbapi.com/?s=war&page=1&apikey=22808c07",
  );
  return searchMovies.Search;
});

const initialState: MoviesState = {
  movies: fetchMovies(),
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state, action) => {});
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.movies = payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {});
  },
});

export default moviesSlice.reducer;
