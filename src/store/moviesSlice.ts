import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types/Movies'; 
import moviesData from '../data/moviesData.json';

interface MoviesState {
  movies: Movie[];
  searchText: string;
}

const initialState: MoviesState = {
  movies: moviesData.movies.map((movie) => ({
    ...movie,
    release_date: new Date(movie.release_date).toISOString(),
  })),
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
      const newMovie = { ...action.payload, id: state.movies.length + 1 };
      state.movies.push(newMovie);
    },
    editMovie(state, action: PayloadAction<{ id: number; updatedMovie: Movie }>) {
      const { id, updatedMovie } = action.payload;
      const index = state.movies.findIndex((movie) => movie.id === id);
      if (index !== -1) {
        state.movies[index] = updatedMovie;
      }
    },
    deleteMovie(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.movies = state.movies.filter((movie) => movie.id !== id);
    },
  },
});

export const { setSearchText, addMovie, editMovie, deleteMovie } = moviesSlice.actions;

export const addNewMovie = (newMovie: Movie) => (dispatch: any) => {
  dispatch(addMovie(newMovie));
};

export default moviesSlice.reducer;
