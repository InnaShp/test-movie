import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Movie } from "../../types/Movies";

export default function MovieItem(props: { movie: Movie }) {
  const { movie } = props;
  const releaseYear = new Date(movie.release_date).getFullYear();

  return (
    <Card sx={{maxWidth: "300px"}}>
      <CardContent>
        <CardMedia component="img" image={movie.image} title={movie.title} sx={{objectFit: "cover", width: "100%", height: "400px", borderRadius: "10px"}} />
        <Typography>{movie.title}</Typography>
        <Typography>{releaseYear}</Typography>
        <Typography>{movie.rating}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read more</Button>
      </CardActions>
    </Card>
  );
}
