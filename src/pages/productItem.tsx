import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Rating, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store";
import { Movie } from "../types/Movies";
import { grey } from "../theme/palette";

import SecondaryButton from "../components/secondaryButton/secondaryButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { deleteMovie, editMovie } from "../store/moviesSlice";
import EditModal from "../components/editModal/editModal";

function ProductItem() {
  const { id } = useParams<{ id: string | undefined }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const movie = useSelector<RootState, Movie | undefined>((state) =>
    id
      ? state.movies.movies.find((movie) => movie.id === parseInt(id))
      : undefined
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveEdit = (updatedMovie: Movie) => {
    dispatch(editMovie({ id: updatedMovie.id, updatedMovie }));
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    if (id) {
      dispatch(deleteMovie(parseInt(id)));
    }
    navigate(-1);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      sx={{
        backgroundColor: grey[300],
        minHeight: "100vh",
        padding: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "60px",
          justifyContent: "center",
        }}
      >
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
            {Array.isArray(movie.genre) ? movie.genre.join("/") : movie.genre}
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
            <strong>The cast:</strong>{" "}
            {Array.isArray(movie.actors)
              ? movie.actors.join(", ")
              : movie.actors}
          </Typography>
          <Typography>
            <strong>Description:</strong> {movie.description}
          </Typography>
        </Box>
      </Box>
      <Box display={"flex"} gap={"30px"} mt={"60px"} justifyContent={"center"}>
        <SecondaryButton onClick={handleEdit} color="success">
          <EditIcon />
        </SecondaryButton>
        <SecondaryButton onClick={handleDelete} color="error">
          <DeleteOutlineIcon />
        </SecondaryButton>
      </Box>
      <EditModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        movie={movie}
        onSave={handleSaveEdit}
      />
    </Box>
  );
}

export default ProductItem;
