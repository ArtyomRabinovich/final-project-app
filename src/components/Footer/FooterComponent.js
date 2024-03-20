import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, IconButton, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        bgcolor: "primary.main",
        color: "primary.contrastText",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2px 0",
      }}
    >
      <Typography variant="body1" color="inherit">
        Copyright © {new Date().getFullYear()} Artyom Rabinovich
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" color="inherit" sx={{ mr: 1 }}>
          Follow Me:
        </Typography>
        <IconButton
          aria-label="GitHub"
          href="https://github.com/ArtyomRabinovich"
          color="inherit"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/artyom-rabinovich"
          color="inherit"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
