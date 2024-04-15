import { useSelector } from "react-redux";
import MovieItem from "../movieItem/movieItem";
import { Movie } from "../../types/Movies";
import { RootState } from "../../store";
import { Box, Grid, Typography } from "@mui/material";

export default function MovieList() {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const searchText = useSelector((state: RootState) => state.movies.searchText); 

  const filteredMovies = movies.filter((movie: Movie) => {
    return movie.title.toLowerCase().includes(searchText.toLowerCase());
  });

  if (filteredMovies.length === 0) {
    return (
      <Box>
        <Typography variant="h3">Oops, no movies found matching your search 🥲</Typography>
      </Box>
    );
  }
  
  return (
    <Box>
      <Grid container spacing={2}>
        {filteredMovies.map((item: Movie) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <MovieItem movie={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
