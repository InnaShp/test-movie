import { useSelector } from "react-redux";
import MovieItem from "../movieItem/movieItem";
import { Movie } from "../../types/Movies";
import { RootState } from "../../store";
import { Box, Grid, Typography } from "@mui/material";
import { useFavorites } from "../../hooks/useFavourites";

export default function MovieList() {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const searchText = useSelector((state: RootState) => state.movies.searchText);

  const { isFavorite, toggleFavorite } = useFavorites();

  const filteredMovies = movies.filter((movie: Movie) => {
    return movie.title.toLowerCase().includes(searchText.toLowerCase());
  });

  if (filteredMovies.length === 0) {
    return (
      <Box padding={"0 30px"} textAlign={"center"}>
        <Typography variant="h3">
          Oops, no movies found matching your search 🥲
        </Typography>
      </Box>
    );
  }

  return (
    <Box padding={4}>
      <Grid container spacing={3}>
        {filteredMovies.map((item: Movie) => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <MovieItem
              movie={item}
              isFavorite={isFavorite(item)}
              onToggleFavorite={toggleFavorite}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
