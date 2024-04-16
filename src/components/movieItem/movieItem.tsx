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

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface MovieItemProps {
  movie: Movie;
  isFavorite?: boolean;
  onToggleFavorite?: (movie: Movie) => void;
}
export default function MovieItem({
  movie,
  isFavorite,
  onToggleFavorite,
}: MovieItemProps) {
  const releaseYear = new Date(movie.release_date).getFullYear();

  const trimmedTitle =
    movie.title.length > 25
      ? movie.title.substring(0, 25) + "..."
      : movie.title;

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
      <CardActions sx={{ paddingTop: "0", display:"flex", justifyContent: "space-between" }}>
        <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
          <Button color="primary">Read more</Button>
        </Link>
        <Button
          color={isFavorite ? "error" : "primary"}
          onClick={() => onToggleFavorite && onToggleFavorite(movie)}
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
      </CardActions>
    </Card>
  );
}
