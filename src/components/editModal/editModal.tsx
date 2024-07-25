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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setEditedMovie(movie);
  }, [movie]);

  const getFieldValue = (field: keyof Movie) => editedMovie?.[field] || "";

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

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!editedMovie?.title) newErrors.title = "Title is required";
    if (!editedMovie?.rating || editedMovie.rating < 0 || editedMovie.rating > 10)
      newErrors.rating = "Rating must be between 0 and 10";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate() && editedMovie) {
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
          value={getFieldValue('title')}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.title}
          helperText={errors.title}
        />
        <TextField
          name="genre"
          label="Жанр"
          value={getFieldValue('genre')}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <TextField
          name="rating"
          label="Rating"
          value={getFieldValue('rating')}
          onChange={handleChange}
          fullWidth
          margin="normal"
          error={!!errors.rating}
          helperText={errors.rating}
        />
        <TextField
          name="director"
          label="Director"
          value={getFieldValue('director')}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="actors"
          label="The cast"
          value={getFieldValue('actors')}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="image"
          label="Image"
          value={getFieldValue('image')}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="description"
          label="Description"
          value={getFieldValue('description')}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={5}
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
