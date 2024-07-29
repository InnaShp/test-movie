import { Box, Typography } from "@mui/material";
import SearchBox from "../components/searchBox/searchBox";
import MovieList from "../components/movieList/movieList";
import { grey } from "../theme/palette";
import { useState } from "react";

export default function HomePage() {
  const [searchText, setSearchText] = useState("");
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: grey[300],
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        padding: "60px 0"
      }}
    >
      <Typography variant="h1">List of movies</Typography>

      <SearchBox searchText={searchText} setSearchText={setSearchText} />

      <MovieList searchText={searchText} />
    </Box>
  );
}
