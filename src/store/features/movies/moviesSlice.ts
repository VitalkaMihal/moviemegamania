import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformMovieApi } from "mappers";
import { Movie, ResponseMovie, ResponseMovieApi } from "types";

interface MoviesState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
}

const pageNumber = new Date().getDate();

export const fetchMovies = createAsyncThunk<ResponseMovie, undefined, { rejectValue: string }>(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<ResponseMovieApi>(
        `https://www.omdbapi.com/?s=war&page=${pageNumber}&apikey=22808c07`,
      );
      return transformMovieApi(data);
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.movies = payload.search;
      state.isLoading = false;
    });
    builder.addCase(fetchMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default moviesSlice.reducer;
