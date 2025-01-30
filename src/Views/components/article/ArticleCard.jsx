import React from "react";
import { Box, Typography, Container } from "@mui/material";

const ArticleCard = ({
  title = "Título de la tarjeta",
  content = "Este es el contenido principal de la tarjeta.",
  containerStyles = {}, // Personalización del contenedor
  cardStyles = {}, // Personalización de la tarjeta
  titleStyles = {}, // Personalización del título
  contentStyles = {}, // Personalización del contenido
}) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginBottom: 4,
        display: "flex",
        justifyContent: "center",
        ...containerStyles,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          padding: 3,
          border: "1px solid #cccccc",
          borderRadius: "8px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          ...cardStyles, // Personalización de la tarjeta
        }}
      >
        {/* Título */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
            color: "#0073e6",
            ...titleStyles, // Personalización del título
          }}
        >
          {title}
        </Typography>

        {/* Contenido */}
        <Typography
          variant="body1"
          sx={{
            color: "#333333",
            lineHeight: "1.6",
            ...contentStyles, // Personalización del contenido
          }}
        >
          {content}
        </Typography>
      </Box>
    </Container>
  );
};

export default ArticleCard;
