import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import selectedMovieReducer from "./selectedMovie";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;