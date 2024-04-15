import { createSlice } from '@reduxjs/toolkit';
import moviesData from '../data/moviesData.json'; 

interface Movie {
  id: number;
  title: string;
  description: string;
  rating: number;
  release_date: string;
  genre: string[];
  actors: string[];
  director: string;
  image: string;
}

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
    // Додайте редуктори (reducers) за потреби
  },
});

export const { /* деструктуризовані редуктори */ } = moviesSlice.actions;
export default moviesSlice.reducer;