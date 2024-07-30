import MovieItem from "../movieItem/movieItem";
import { Movie } from "../../types/Movies";
import { Box, Grid, Typography } from "@mui/material";
import { useGetMoviesQuery } from "../../rtk/api";
import { useState } from "react";
import PaginationBox from "../Pagination/pagination";
import { ITEMS_PER_PAGE } from "../../helper/constants";

export default function MovieList({ searchText }: { searchText: string }) {
  const [page, setPage] = useState(1);

  const { data } = useGetMoviesQuery({
    page,
    limit: ITEMS_PER_PAGE,
    searchText,
  });

  const movies = data?.data ?? [];
  const totalMovies = data?.total ?? 0;
  const count = Math.ceil(totalMovies / ITEMS_PER_PAGE) || 1;

  if (movies.length === 0) {
    return (
      <Box padding={"0 30px"} textAlign={"center"}>
        <Typography variant="h3">Oops, no movies 🥲</Typography>
      </Box>
    );
  }

  return (
    <Box
      padding={4}
      display={"flex"}
      flexDirection={"column"}
      gap={"50px"}
      alignItems={"center"}
    >
      <Grid container spacing={3}>
        {movies.map((item: Movie) => (
          <Grid item xs={12} md={6} lg={4} key={item.id} minWidth={"320px"}>
            <MovieItem movie={item} />
          </Grid>
        ))}
      </Grid>

      <PaginationBox count={count} page={page} setPage={setPage} />
    </Box>
  );
}
