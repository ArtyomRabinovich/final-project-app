import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateStoredLaptop, deleteStoredLaptop } from "../../data/dataUtility";
import { Typography, Box, Button, useTheme } from "@mui/material";
import EditLaptopForm from "./EditLaptopComponent";

const Laptop = ({ laptop }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = () => {
    deleteStoredLaptop(laptop.id);
    navigate("/Items");
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleSave = (updatedLaptop) => {
    updateStoredLaptop(updatedLaptop);

    setIsEditModalOpen(false);

    navigate(`/ItemDetails/${updatedLaptop.id}?refresh`);
  };

  const laptopDetails = [
    `Release Year: ${laptop.release_year}`,
    `Processor: ${laptop.processor}`,
    `RAM: ${laptop.ram}`,
    `Storage: ${laptop.storage}`,
    `Display Size: ${laptop.display_size}`,
    `Resolution: ${laptop.resolution}`,
    `Graphics Card: ${laptop.graphics_card}`,
    `Weight: ${laptop.weight}`,
    `Price: $${laptop.price}`,
    `Colors: ${laptop.colors.join(", ")}`,
    `Description: ${laptop.description}`,
    `Average Rating: ${laptop.ratings.average} (${laptop.ratings.count} reviews)`,
    `Reviews: ${
      laptop.reviews &&
      laptop.reviews
        .map(
          (review) =>
            `${review.username}: ${review.rating}/5 - ${review.comment}`
        )
        .join(", ")
    }`,
  ];

  return (
    <Box
      sx={{
        p: 3,
        minHeight: "88vh",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        component="h1"
        color={theme.palette.primary.main}
        sx={{ mb: 2 }}
      >
        {laptop.brand} {laptop.model}
      </Typography>
      <Box sx={{ mb: 2 }}>
        {laptopDetails.map((detail, index) => (
          <Typography key={index} variant="body1" paragraph>
            {detail}
          </Typography>
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" color="primary" onClick={handleEdit}>
          Edit
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </Box>
      <EditLaptopForm
        open={isEditModalOpen}
        laptop={laptop}
        onSave={handleSave}
        onCancel={() => setIsEditModalOpen(false)}
      />
    </Box>
  );
};

export default Laptop;
