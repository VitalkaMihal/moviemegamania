import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Movies } from "types";

interface MoviesState {
  movies: any[];
}

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const moviesData = await axios.get("https://www.omdbapi.com/?s=war&page=1&apikey=22808c07");
  return moviesData;
});

const initialState: MoviesState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state, action) => {});
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.movies = payload.data.Search;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {});
  },
});

export default moviesSlice.reducer;
