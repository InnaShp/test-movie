import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types/Movies';

interface SelectedMovieState {
  selectedMovie: Movie | null;
}

const initialState: SelectedMovieState = {
  selectedMovie: null,
};

const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState,
  reducers: {
    setSelectedMovie(state, action: PayloadAction<Movie>) {
      state.selectedMovie = action.payload;
    },
    clearSelectedMovie(state) {
      state.selectedMovie = null;
    },
  },
});

export const { setSelectedMovie, clearSelectedMovie } = selectedMovieSlice.actions;
export default selectedMovieSlice.reducer;
