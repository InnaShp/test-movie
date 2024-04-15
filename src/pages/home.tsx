import { Box, Typography } from "@mui/material";
import SearchBox from "../components/searchBox/searchBox";
import MovieList from "../components/movieList/movieList";
import { grey } from "../theme/palette";

export default function HomePage() {
  return (
    <Box
      sx={{
        backgroundColor: grey[300],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Typography variant="h1">List of movies</Typography>

      <SearchBox />

      <MovieList />
    </Box>
  );
}
