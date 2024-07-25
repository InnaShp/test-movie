import { combineReducers, configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./moviesSlice";
//import selectedMovieReducer from "./selectedMovie";
//import favoritesReducer from "./favouritesSlice";
import { movieApi } from "../rtk/api";

const rootReducer = combineReducers({
  movies: moviesReducer,
  //selectedMovie: selectedMovieReducer,
  //favorites: favoritesReducer,
  [movieApi.reducerPath]: movieApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
