import { useSelector } from "react-redux";
import MovieItem from "../movieItem/movieItem";
import { Movie } from "../../types/Movies";
import { RootState } from "../../store";
import { Box, Grid } from "@mui/material";

export default function MovieList() {
  const movies = useSelector((state: RootState) => state.movies.movies);
  
  return (
    <Box>
      <Grid container spacing={2}>
        {movies.map((item: Movie) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <MovieItem movie={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
