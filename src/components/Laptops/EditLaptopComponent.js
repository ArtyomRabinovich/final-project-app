import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "500px",
  bgcolor: "background.paper",
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  overflowY: "auto",
  maxHeight: "90vh",
};

const EditLaptopForm = ({ open, laptop, onSave, onCancel }) => {
  const [editedLaptop, setEditedLaptop] = useState(laptop);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedLaptop({ ...editedLaptop, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(editedLaptop);
  };

  return (
    <Modal
      open={open}
      onClose={onCancel}
      aria-labelledby="edit-laptop-modal-title"
      aria-describedby="edit-laptop-modal-description"
    >
      <Box sx={style} component="form" onSubmit={handleSubmit}>
        <Typography id="edit-laptop-modal-title" variant="h6" component="h2">
          Edit Laptop
        </Typography>
        <TextField
          name="brand"
          label="Brand"
          value={editedLaptop.brand}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="model"
          label="Model"
          value={editedLaptop.model}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="release_year"
          label="Release Year"
          type="number"
          value={editedLaptop.release_year}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="processor"
          label="Processor"
          value={editedLaptop.processor}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="ram"
          label="RAM"
          value={editedLaptop.ram}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="storage"
          label="Storage"
          value={editedLaptop.storage}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="display_size"
          label="Display Size"
          value={editedLaptop.display_size}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="resolution"
          label="Resolution"
          value={editedLaptop.resolution}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="graphics_card"
          label="Graphics Card"
          value={editedLaptop.graphics_card}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="weight"
          label="Weight"
          value={editedLaptop.weight}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="price"
          label="Price"
          type="number"
          value={editedLaptop.price}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="colors"
          label="Colors (comma separated)"
          value={editedLaptop.colors.join(", ")}
          onChange={(e) =>
            setEditedLaptop({
              ...editedLaptop,
              colors: e.target.value.split(",").map((color) => color.trim()),
            })
          }
          fullWidth
        />
        <TextField
          name="description"
          label="Description"
          value={editedLaptop.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
          <Button variant="contained" color="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditLaptopForm;
