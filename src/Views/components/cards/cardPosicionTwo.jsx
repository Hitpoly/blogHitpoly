import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom"; 

function PostCardTwo({ image, title, linkCategoria, linkText, linkArticle,}) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <Card
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={handleMouseEnter} // Activar el hover
      onMouseLeave={handleMouseLeave} // Desactivar el hover
    >
      {/* Enlace envolviendo la imagen */}
      <Link
        to={linkArticle || "/default"} // Redirige al linkArticle
        style={{ textDecoration: "none" }}
      >
        {/* Imagen del post */}
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: "100%",
            borderRadius: "10px",
            height: "25vh",
            transition: "transform 0.3s ease", // Animación suave
            transform: hovered ? "scale(1.1)" : "scale(1)", // Efecto de lupa
            cursor: "pointer", // Cambiar el cursor a pointer
          }}
        />
      </Link>

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "30px 0px",
        }}
      >
        {/* Sección encima del título que se puede hacer clic */}
        <Box
          sx={{
            color: "#F21C63",
            width: "25%",
            fontWeight: "700",
            fontSize: "0.85rem",
            marginBottom: "15px",
            "&:hover": {
              color: "#4285F4", // Color que quieres aplicar cuando se pasa el mouse sobre el enlace
            },
          }}
        >
          <Link
            to={linkCategoria || "/default"}
            style={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer", // Cambiar el cursor a pointer
            }}
          >
            {linkText || "Categoría"}
          </Link>
        </Box>

        {/* Título del post */}
        <Link
          to={linkArticle || "/default"} // Redirige al linkArticle
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontSize: "1.3rem",
              fontWeight: "500",
              color: "#333",
              width: "90%",
              transition: "text-decoration 0.3s ease", // Transición suave para el subrayado
              textDecoration: hovered ? "underline" : "none", // Subrayado en el texto
              cursor: "pointer", // Cambiar el cursor a pointer
            }}
          >
            {title}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default PostCardTwo;
