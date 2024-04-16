import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import moviesData from '../data/moviesData.json'; 
import { Movie } from '../types/Movies';

interface MoviesState {
  movies: Movie[];
  searchText: string;
}

const initialState: MoviesState = {
  movies: moviesData.movies,
  searchText: '',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    addMovie(state, action: PayloadAction<Movie>) {
      state.movies.push(action.payload);
    },
    editMovie(state, action: PayloadAction<{ id: number, updatedMovie: Movie }>) {
      const { id, updatedMovie } = action.payload;
      const index = state.movies.findIndex(movie => movie.id === id);
      if (index !== -1) {
        state.movies[index] = updatedMovie;
      }
    },
    deleteMovie(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.movies = state.movies.filter(movie => movie.id !== id);
    },
  },
});

export const { setSearchText, addMovie, editMovie, deleteMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
