import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";

const SocialAdvantages = ({
  title = "Ventajas de las redes Sociales", // Título principal
  textArray = [], // Lista de textos
  logoSrc = "/images/logo-hitpoly.png", // Ruta del logo
  logoAlt = "Hitpoly Logo", // Texto alternativo del logo
  containerStyles = {}, // Estilos personalizados para el contenedor
  logoStyles = {}, // Estilos personalizados para el logo
  paperStyles = {}, // Estilos personalizados para los elementos Paper
}) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: "10%",
        marginBottom: 5,
        textAlign: "center",
        ...containerStyles, // Permitir personalización del contenedor
      }}
    >
      {/* Imagen del logo */}
      <Box
        component="img"
        src={logoSrc}
        alt={logoAlt}
        sx={{
          width: "150px",
          margin: "0 auto",
          ...logoStyles, // Permitir personalización del logo
        }}
      />

      {/* Título principal */}
      <Typography
        variant="h4"
        sx={{
          color: "#8A2BE2",
          fontWeight: "bold",
          marginTop: 2,
          marginBottom: 4,
        }}
      >
        {title}
      </Typography>

      {/* Renderizar elementos alternados */}
      {textArray.length > 0 ? (
        textArray.map((text, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end", // Alternar posición
              marginBottom: 4,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                width: "48%", // Cada Paper ocupa menos de la mitad del contenedor
                padding: 2,
                borderRadius: 4,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                ...paperStyles, // Permitir personalización de los elementos Paper
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "#555", textAlign: "left" }}
              >
                {text}
              </Typography>
            </Paper>
          </Box>
        ))
      ) : (
        <Typography variant="body1" sx={{ color: "#999" }}>
          No hay contenido disponible.
        </Typography>
      )}
    </Container>
  );
};

export default SocialAdvantages;
