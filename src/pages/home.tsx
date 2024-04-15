import { Typography } from "@mui/material";
import SearchBox from "../components/searchBox/searchBox";
import MovieList from "../components/movieList/movieList";

export default function HomePage() {

  return (
    <>
      <Typography variant="h1">List of movies</Typography>

      <SearchBox />

      <MovieList />

    </>
  );
}
