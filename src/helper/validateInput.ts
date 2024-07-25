import { Movie, NewMovie } from "../types/Movies";

export const validate = (editedMovie: Movie | NewMovie | undefined): { [key: string]: string } => {
  const newErrors: { [key: string]: string } = {};

  if (!editedMovie?.title) newErrors.title = "Title is required";
  if (!editedMovie?.genre || editedMovie.genre.length === 0) newErrors.genre = "Genre is required";
  if (!editedMovie?.rating) newErrors.rating = "Rating is required";
  if (editedMovie?.rating && (editedMovie.rating < 0 || editedMovie.rating > 10)) newErrors.rating = "Rating must be between 0 and 10";
  if (!editedMovie?.release_date) newErrors.release_date = "Release date is required";
  if (!editedMovie?.director) newErrors.director = "Director is required";
  if (!editedMovie?.actors || editedMovie.actors.length === 0) newErrors.actors = "At least one actor is required";
  if (!editedMovie?.image) newErrors.image = "Image URL is required";
  if (!editedMovie?.description) newErrors.description = "Description is required";

  return newErrors;
};