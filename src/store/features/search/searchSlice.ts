import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformMovieApi } from "mappers";
import { Movie, ResponseMovie, ResponseMovieApi } from "types";

interface MoviesState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  isLoading: false,
  error: null,
};

export const fetchSearch = createAsyncThunk<ResponseMovie, string, { rejectValue: string }>(
  "search/fetchSearch",
  async (search, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<ResponseMovieApi>(
        `https://www.omdbapi.com/?s=${search}&apikey=22808c07`,
      );
      return transformMovieApi(data);
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.movies = [];
    });
    builder.addCase(fetchSearch.fulfilled, (state, { payload }) => {
      state.movies = payload.search;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchSearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
        state.movies = [];
      }
    });
  },
});

export default searchSlice.reducer;
