import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addMovie, removeMovie } from "../store/favouritesSlice";
import { Movie } from "../types/Movies";

export function useFavorites() {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector<RootState, Movie[]>((state) => state.favorites.movies);

  const isFavorite = (movie: Movie) => {
    return favoriteMovies.some((favorite) => favorite.id === movie.id);
  }; 

  const toggleFavorite = (movie: Movie) => {
    if (isFavorite(movie)) {
      dispatch(removeMovie(movie.id));
    } else {
      dispatch(addMovie(movie));
    }
  };

  return { favoriteMovies, isFavorite, toggleFavorite };
}
