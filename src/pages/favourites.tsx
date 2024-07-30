import { Box, Grid, Typography } from "@mui/material";
import { grey } from "../theme/palette";
import { Movie } from "../types/Movies";
import MovieItem from "../components/movieItem/movieItem";
import { useGetFavoriteMoviesQuery } from "../rtk/api";
import { useState } from "react";
import PaginationBox from "../components/Pagination/pagination";
import { ITEMS_PER_PAGE } from "../helper/constants";

export default function Favourites() {
  const [page, setPage] = useState(1);

  const { data } = useGetFavoriteMoviesQuery({ page, limit: ITEMS_PER_PAGE });

  const favoriteMovies = data?.data ?? [];
  const totalMovies = data?.total ?? 0;
  const count = Math.ceil(totalMovies / ITEMS_PER_PAGE) || 1;

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
      <Grid container spacing={3}>
        {favoriteMovies.map((item: Movie) => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <MovieItem movie={item} />
          </Grid>
        ))}
      </Grid>

      <PaginationBox count={count} page={page} setPage={setPage} />
    </Box>
  );
}
