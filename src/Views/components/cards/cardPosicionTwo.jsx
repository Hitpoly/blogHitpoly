import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function PostCardTwo({ image, title, linkArticle, linkText }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  // Verificar si linkArticle es válido
  if (!linkArticle) {
    console.error("Error: linkArticle no está definido para el artículo:", title);
  }

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Enlace envolviendo la imagen */}
      <Link
        to={linkArticle || "/error"} // Enlace seguro al artículo
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: "100%",
            borderRadius: "10px",
            height: "25vh",
            transition: "transform 0.3s ease",
            transform: hovered ? "scale(1.1)" : "scale(1)",
            cursor: "pointer",
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
          textAlign: "left", 
        }}
      >
        {/* Título del post */}
        <Link
          to={linkArticle || "/error"} // Redirige correctamente al artículo
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
              transition: "text-decoration 0.3s ease",
              textDecoration: hovered ? "underline" : "none",
              cursor: "pointer",
            }}
          >
            {title}
          </Typography>
        </Link>

        {/* Botón "Leer más" debe redirigir al artículo y alinearse a la izquierda */}
        <Button
          component={Link}
          to={linkArticle || "/error"}
          variant="text"
          sx={{
            color: "#F21C63",
            fontWeight: "700",
            fontSize: "0.9rem",
            textTransform: "none",
            "&:hover": { color: "#4285F4" },
            alignSelf: "flex-start",
          }}
        >
          {linkText || "Leer más"}
        </Button>
      </CardContent>
    </Card>
  );
}

export default PostCardTwo;