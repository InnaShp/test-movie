import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";
import { NewMovie } from "../../types/Movies";
import { validate } from "../../helper/validateInput";

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newMovie: NewMovie) => void;
}

const AddModal: React.FC<AddModalProps> = ({ isOpen, onClose, onSave }) => {
  const [newMovie, setNewMovie] = useState<NewMovie>({
    title: "",
    genre: [],
    rating: 0,
    director: "",
    actors: [],
    description: "",
    image: "",
    release_date: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const getFieldValue = (field: keyof NewMovie) => newMovie?.[field] || "";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newValue = name === "rating" ? parseFloat(value) : value;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: newValue,
    }));
  };

  const handleSave = () => {
    const newErrors = validate(newMovie);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0 && newMovie) {
      onSave(newMovie);
      onClose();
      setNewMovie({
        title: "",
        genre: [],
        rating: 0,
        director: "",
        actors: [],
        description: "",
        image: "",
        release_date: "",
      });
    }
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
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
                <TextField
          required
          name="title"
          label="Title"
          value={getFieldValue("title")}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.title}
          helperText={errors.title}
        />
        <TextField
          required
          name="genre"
          label="Жанр"
          value={getFieldValue("genre")}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.genre}
          helperText={errors.genre}
        />
        <TextField
          required
          name="rating"
          label="Rating"
          value={getFieldValue("rating")}
          onChange={handleChange}
          fullWidth
          margin="normal"
          type="number"
          error={!!errors.rating}
          helperText={errors.rating}
        />
        <TextField
          required
          name="release_date"
          value={getFieldValue("release_date")}
          onChange={handleChange}
          fullWidth
          margin="normal"
          type="date"
          error={!!errors.release_date}
          helperText={errors.release_date}
        />
        <TextField
          required
          name="director"
          label="Director"
          value={getFieldValue("director")}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.director}
          helperText={errors.director}
        />
        <TextField
          required
          name="actors"
          label="The Cast"
          value={getFieldValue("actors")}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.actors}
          helperText={errors.actors}
        />
        <TextField
          required
          name="image"
          label="Image"
          value={getFieldValue("image")}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.image}
          helperText={errors.image}
        />
        <TextField
          required
          name="description"
          label="Description"
          value={getFieldValue("description")}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={5}
          error={!!errors.description}
          helperText={errors.description}
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

export default AddModal;
