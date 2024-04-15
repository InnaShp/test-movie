import { Box, Button, Rating, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "../store";
import { Movie } from "../types/Movies";
import { grey } from "../theme/palette";

function ProductItem() {
  const { id } = useParams<{ id: string | undefined }>();

  const movie = useSelector<RootState, Movie | undefined>((state) =>
    id
      ? state.movies.movies.find((movie) => movie.id === parseInt(id))
      : undefined
  );

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: grey[300],
        minHeight: "100vh",
        flexDirection: "row",
        gap: "60px",
        padding: "100px",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Link
        to="/"
        style={{ textDecoration: "none", position: "absolute", top: "30px" }}
      >
        <Button color="primary">Home</Button>
      </Link>
      <Box
        component="img"
        sx={{
          height: 600,
          width: "auto",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          borderRadius: "5px",
        }}
        src={movie.image}
        alt={movie.title}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          maxWidth: "500px",
        }}
      >
        <Typography variant="h2">{movie.title}</Typography>
        <Typography variant="body1" fontStyle={"italic"}>
          {movie.genre.join("/")}
        </Typography>
        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
          <Rating
            name="read-only"
            value={movie.rating}
            readOnly
            precision={0.2}
            max={10}
          />
          <Typography variant="body2">{movie.rating}</Typography>
        </Box>
        <Typography>
          <strong>Director:</strong> {movie.director}
        </Typography>
        <Typography>
          <strong>The cast:</strong> {movie.actors.join(", ")}
        </Typography>
        <Typography>
          <strong>Description:</strong> {movie.description}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProductItem;
