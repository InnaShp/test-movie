import MovieItem from "../movieItem/movieItem";
import { Movie } from "../../types/Movies";
import { Box, Grid, Typography } from "@mui/material";
import { useGetMoviesQuery } from "../../rtk/api";

export default function MovieList({ searchText }: { searchText: string }) {
  const { data } = useGetMoviesQuery(searchText);
  const movies = data ?? [];

  if (movies.length === 0) {
    return (
      <Box padding={"0 30px"} textAlign={"center"}>
        <Typography variant="h3">
          Oops, no movies 🥲
        </Typography>
      </Box>
    );
  }

  return (
    <Box padding={4}>
      <Grid container spacing={3}>
        {movies.map((item: Movie) => (
          <Grid item xs={12} md={6} lg={4} key={item.id} minWidth={"320px"}>
            <MovieItem movie={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
