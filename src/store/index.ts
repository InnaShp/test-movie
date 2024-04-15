import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./moviesSlice";
import selectedMovieReducer from "./selectedMovie";
import favoritesReducer from "./favouritesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer,
    favorites: favoritesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;