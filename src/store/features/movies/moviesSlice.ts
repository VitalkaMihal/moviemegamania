import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformMovieApi } from "mappers";
import { Movie, ResponseMovie, ResponseMovieApi } from "types";

interface MoviesState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
  showMore: boolean;
  firstLoading: boolean;
}

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: null,
  showMore: false,
  firstLoading: true,
};

const movieRandom = [
  "war",
  "drive",
  "car",
  "dog",
  "marvel",
  "batman",
  "cup",
  "now",
  "hitman",
  "cat",
];

export const fetchMovies = createAsyncThunk<ResponseMovie, undefined, { rejectValue: string }>(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<ResponseMovieApi>(
        `https://www.omdbapi.com/?s=${
          movieRandom[Math.round(Math.random() * 10) - 1]
        }&page=${Math.ceil(Math.random() * 5)}&apikey=22808c07`,
      );
      return transformMovieApi(data);
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    showMoreButton: (state) => {
      state.showMore = true;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.error = null;
      if (state.firstLoading) {
        state.movies = payload.search;
      } else if (state.showMore) {
        state.movies.push(...payload.search);
      } else {
      }
      state.isLoading = false;
      state.showMore = false;
      state.firstLoading = false;
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

export const { showMoreButton } = moviesSlice.actions;
