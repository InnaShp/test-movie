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
  },
});

export const { setSearchText } = moviesSlice.actions;
export default moviesSlice.reducer;