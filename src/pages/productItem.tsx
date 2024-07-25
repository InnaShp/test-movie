import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Rating, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Movie } from "../types/Movies";
import { grey } from "../theme/palette";

import SecondaryButton from "../components/secondaryButton/secondaryButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import EditModal from "../components/editModal/editModal";
import {
  useDeleteMovieMutation,
  useGetMovieByIdQuery,
  useUpdateMovieMutation,
} from "../rtk/api";

function ProductItem() {
  const { id } = useParams<{ id: any }>();
  const navigate = useNavigate();

  const [deleteMovie] = useDeleteMovieMutation();
  const [editMovie] = useUpdateMovieMutation();
  const { data: movie } = useGetMovieByIdQuery(id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveEdit = (updatedMovie: Movie) => {
    editMovie(updatedMovie).then(handleModalClose);
  };

  const handleDelete = () => {
    deleteMovie(id).then(() => navigate("/"));
  };

  if (!movie) {
    return <div>Can't find the movie</div>;
  }

  return (
    <Box
      sx={{
        backgroundColor: grey[300],
        minHeight: "100vh",
        padding: { xs: "100px 50px", md: "100px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "60px",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            maxHeight: 600,
            minHeight: 400,
            width: "auto",
            borderRadius: "5px",
            objectFit: "contain",
          }}
          src={movie.image}
          alt={movie.title}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "10px", md: "30px" },
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
        <SecondaryButton onClick={() => setIsModalOpen(true)} color="success">
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
