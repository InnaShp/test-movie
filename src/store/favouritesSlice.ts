import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types/Movies';

interface FavoritesState {
  movies: Movie[];
}

const initialState: FavoritesState = {
  movies: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addMovie(state, action: PayloadAction<Movie>) {
      state.movies.push(action.payload);
    },
    removeMovie(state, action: PayloadAction<number>) {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
    },
  },
});

export const { addMovie, removeMovie } = favoritesSlice.actions;
export default favoritesSlice.reducer;
