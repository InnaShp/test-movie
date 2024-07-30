import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { Movie } from "../../types/Movies";
import { Link } from "react-router-dom";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useToggleFavoriteMutation } from "../../rtk/api";
import { memo } from "react";

function MovieItem({ movie }: { movie: Movie }) {
  const [toggleFavorite] = useToggleFavoriteMutation();

  const releaseYear = new Date(movie.release_date).getFullYear();
  const trimmedTitle =
    movie.title.length > 25
      ? movie.title.substring(0, 25) + "..."
      : movie.title;

  const handleToggleFavorite = async ({
    id,
    isFavorite,
  }: {
    id: string;
    isFavorite: boolean;
  }) => {
    const updateConfig = {};
    try {
      await toggleFavorite({ id, isFavorite: !isFavorite, updateConfig }).unwrap();
    } catch (error) {
      console.error("Failed to toggle favorite", error);
    }
  };

  return (
    <Card sx={{ width: "300px", height: "560px", margin: "0 auto" }}>
      <CardContent>
        <CardMedia
          component="img"
          image={movie.image}
          title={movie.title}
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "400px",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        />
        <Typography variant="h6">{trimmedTitle}</Typography>
        <Typography variant="body2">{releaseYear}</Typography>
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
      </CardContent>
      <CardActions
        sx={{
          paddingTop: "0",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
          <Button color="primary">Read more</Button>
        </Link>
        <Button
          color={movie.favorite ? "error" : "primary"}
          onClick={() =>
            handleToggleFavorite({ id: movie.id, isFavorite: movie.favorite })
          }
        >
          {movie.favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
      </CardActions>
    </Card>
  );
}

export default memo(MovieItem);
