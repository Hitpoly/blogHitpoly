import React from "react";
import { Box, Typography, Link } from "@mui/material";

function TextSectionComponent({
  sectionTitle,
  mainTitle,
  description,
  linkText,
  linkUrl,
}) {
  return (
    <Box sx={{padding: {xs: "20px", md: "0px"}}}>
      {/* Título de la sección */}
      <Typography
        variant="subtitle2"
        sx={{ fontSize: "1rem", fontWeight: "bold", color: "#F21C63" }}
      >
        {sectionTitle}
      </Typography>

      {/* Título principal */}
      <Typography
        variant="h4"
        sx={{
          width: "90%",
          fontSize: "2.2rem",
          fontWeight: "700",
          color: "#211E26",
          marginTop: "10px",
          marginBottom: "15px",
        }}
      >
        {mainTitle}
      </Typography>

      {/* Descripción */}
      <Typography
        variant="body1"
        sx={{
          width: "90%",
          fontSize: "1rem",
          color: "#555",
          lineHeight: "1.6",
          marginBottom: "15px",
        }}
      >
        {description}
      </Typography>

      {/* Enlace */}
      <Link
        href={linkUrl}
        sx={{
          width: "90%",
          fontSize: "1rem",
          fontWeight: "500",
          color: "#1a73e8",
          textDecoration: "none",
          "&:hover": {
            color: "#0c56e2", // Color de hover similar al azul de Google
          },
        }}
      >
        {linkText}
      </Link>
    </Box>
  );
}

export default TextSectionComponent;
