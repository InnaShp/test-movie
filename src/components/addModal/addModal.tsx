import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { Movie } from "../../types/Movies";

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newMovie: Movie) => void;
}

const AddModal: React.FC<AddModalProps> = ({ isOpen, onClose, onSave }) => {
  const [newMovie, setNewMovie] = useState<Movie>({
    id: 0,
    title: "",
    genre: [],
    rating: 0,
    director: "",
    actors: [],
    description: "",
    image: "",
    release_date: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newValue = name === "rating" ? parseFloat(value) : value;

    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: newValue,
    }));

    const areAllFieldsFilled = Object.values(newMovie).every((val) => val !== "");
    setIsFormValid(areAllFieldsFilled);
  };

  const handleSave = () => {
    onSave(newMovie);
    onClose();
    setNewMovie({
      id: 0,
      title: "",
      genre: [],
      rating: 0,
      director: "",
      actors: [],
      description: "",
      image: "",
      release_date: "",
    });
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="add-modal-title"
      aria-describedby="add-modal-description"
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
        }}
      >
        <TextField
          required
          name="title"
          label="Title"
          value={newMovie.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          name="genre"
          label="Жанр"
          value={newMovie?.genre}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          name="rating"
          label="Rating"
          value={newMovie.rating}
          onChange={handleChange}
          fullWidth
          margin="normal"
          type="number"
        />
        <TextField
          required
          name="release_date"
          label="Date"
          value={newMovie.release_date}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          name="director"
          label="Director"
          value={newMovie.director}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          name="actors"
          label="The cast"
          value={newMovie?.actors}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          required
          name="description"
          label="Description"
          value={newMovie.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={5}
        />
        <TextField
          required
          name="image"
          label="Image"
          value={newMovie.image}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button
          onClick={handleSave}
          disabled={!isFormValid}
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

export default AddModal;
