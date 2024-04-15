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

export default function MovieItem(props: { movie: Movie }) {
  const { movie } = props;
  const releaseYear = new Date(movie.release_date).getFullYear();

  return (
    <Card sx={{ maxWidth: "300px", margin: "0 auto" }}>
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
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="body2">{releaseYear}</Typography>
        <Box display={"flex"} gap={"10px"} alignItems={"center"}>
          <Rating
            name="read-only"
            value={props.movie.rating}
            readOnly
            precision={0.2}
            max={10}
          />
          <Typography variant="body2">{movie.rating}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button color="primary">Read more</Button>
      </CardActions>
    </Card>
  );
}
