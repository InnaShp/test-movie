import { Box, Grid, Typography } from "@mui/material";
import { grey } from "../theme/palette";
import { Movie } from "../types/Movies";
import MovieItem from "../components/movieItem/movieItem";
import { useGetFavoriteMoviesQuery } from "../rtk/api";

export default function Favourites() {
  const { data } = useGetFavoriteMoviesQuery();
  const favoriteMovies = data ?? [];

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: grey[300],
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        padding: "60px 0",
      }}
    >
      <Typography variant="h1">Favourites</Typography>
      <Grid container spacing={2}>
        {favoriteMovies.map((item: Movie) => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <MovieItem movie={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
