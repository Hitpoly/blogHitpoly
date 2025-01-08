import React from "react";
import { Box, Typography, Container } from "@mui/material";

const ArticleContent = ({
  mainTitle = "Comencemos con este espectacular artículo:",
  sections = [], // Array de secciones con título y contenido
  videoTitle = "",
  videoSrc, // Nueva propiedad para la URL del video
  containerStyles = {}, // Estilos personalizados del contenedor
  videoStyles = {}, // Estilos personalizados de la sección de video
}) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: "5%",
        marginBottom: 4,
        padding: 2,
        backgroundColor: "#ffffff",
        borderRadius: 2,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        ...containerStyles, // Permitir estilos personalizados
      }}
    >
      {/* Título principal */}
      <Typography variant="h6" sx={{ marginBottom: 3 }}>
        {mainTitle}
      </Typography>

      {/* Secciones dinámicas */}
      {sections.length > 0 ? (
        sections.map((section, index) => (
          <Box key={index} sx={{ marginBottom: 4 }}>
            {/* Número y título */}
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
              {`${index + 1}. ${section.title}`}
            </Typography>

            {/* Contenido del texto */}
            <Typography variant="body1" sx={{ color: "#666" }}>
              {section.content}
            </Typography>
          </Box>
        ))
      ) : (
        <Typography variant="body1" sx={{ color: "gray", textAlign: "center" }}>
          No hay contenido disponible.
        </Typography>
      )}

      {/* Sección de video */}
      {videoSrc && (
        <Box
          sx={{
            textAlign: "center",
            marginTop: 4,
            padding: 2,
            backgroundColor: "#F5F5F5",
            borderRadius: 2,
            ...videoStyles, // Permitir estilos personalizados
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            {videoTitle}
          </Typography>
          <video
            controls
            src={videoSrc}
            style={{
              width: "100%",
              maxWidth: "100%",
              borderRadius: "8px",
            }}
          >
            Tu navegador no soporta el elemento de video.
          </video>
        </Box>
      )}
    </Container>
  );
};

export default ArticleContent;
