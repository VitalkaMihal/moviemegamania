import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformMovieApi } from "mappers";
import { Movie, ResponseMovie, ResponseMovieApi } from "types";

interface TrendsState {
  trends: Movie[];
  isLoading: boolean;
  error: string | null;
  totalResults: string | null;
}

const initialState: TrendsState = {
  trends: [],
  isLoading: false,
  error: null,
  totalResults: null,
};

const movieRandom = ["war", "car", "dog"];

export const fetchTrends = createAsyncThunk<ResponseMovie, undefined, { rejectValue: string }>(
  "trends/fetchTrends",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<ResponseMovieApi>(
        `https://www.omdbapi.com/?s=${
          movieRandom[Math.ceil(Math.random() * 3) - 1]
        }&y=2022&apikey=22808c07`,
      );
      return transformMovieApi(data);
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

const trendsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTrends.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTrends.fulfilled, (state, { payload }) => {
      state.trends = payload.search;
      state.totalResults = payload.totalResults;
      state.isLoading = false;
    });
    builder.addCase(fetchTrends.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default trendsSlice.reducer;
