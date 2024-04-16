import React, { useState, useEffect } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { Movie } from "../../types/Movies";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie?: Movie;
  onSave: (updatedMovie: Movie) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  movie,
  onSave,
}) => {
  const [editedMovie, setEditedMovie] = useState<Movie | undefined>(movie);

  useEffect(() => {
    setEditedMovie(movie);
  }, [movie]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newValue = name === "rating" ? parseFloat(value) : value;

    if (editedMovie) {
      setEditedMovie({
        ...editedMovie,
        [name]: newValue,
      });
    }
  };

  const handleSave = () => {
    if (editedMovie) {
      onSave(editedMovie);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="edit-modal-title"
      aria-describedby="edit-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          maxWidth: 500,
          width: "90%",
          borderRadius: 4,
          maxHeight: "90vh", 
          overflowY: "auto", 
        }}
      >
        <TextField
          name="title"
          label="Title"
          value={editedMovie?.title || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="genre"
          label="Жанр"
          value={editedMovie?.genre || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          name="rating"
          label="Rating"
          value={editedMovie?.rating || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="director"
          label="Director"
          value={editedMovie?.director || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="actors"
          label="The cast"
          value={editedMovie?.actors || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="description"
          label="Description"
          value={editedMovie?.description || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={5}
        />
        <TextField
          name="image"
          label="Image"
          value={editedMovie?.image || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <Button
          onClick={handleSave}
          variant="contained"
          color="primary"
          sx={{ width: "150px", height: "40px", fontSize: "16px", mt: 5 }}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default EditModal;
