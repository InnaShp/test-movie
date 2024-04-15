import { createSlice } from '@reduxjs/toolkit';
import moviesData from '../data/moviesData.json'; 
import { Movie } from '../types/Movies';

interface MoviesState {
  movies: Movie[];
}

const initialState: MoviesState = {
  movies: moviesData.movies,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    
  },
});

export const {  } = moviesSlice.actions;
export default moviesSlice.reducer;