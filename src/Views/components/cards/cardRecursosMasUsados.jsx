import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

function RecursosMasUsadosBase({
  image,
  title,
  creator,
  area,
  linkArticle, // Solo recibimos linkArticle
  linkText,
}) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const handleClick = () => {
    navigate(linkArticle);
  };

  return (
    <Grid item xs={12} sm={12} md={12} sx={{ p: 0, m: 0 }}>
      <Card
        sx={{
          position: "relative",
          width: "100%",
          height: "480px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          boxShadow: "none",
        }}
      >
        {/* Imagen del post con hover effect */}
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: "100%",
            borderRadius: "10px 10px 0px 0px",
            height: { xs: "250px", md: "220px" },
            transition: "transform 0.3s ease", // Transición suave
            transform: hovered ? "scale(1.1)" : "scale(1)", // Efecto de lupa en la imagen
            cursor: "pointer",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick} // Al hacer clic en la imagen
        />

        {/* Caja con contenido */}
        <CardContent
          sx={{
            position: "relative",
            bottom: "",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            borderRadius: "0px 0px 10px 10px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Sección encima del título que se puede hacer clic */}
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              variant="body2"
              sx={{
                color: "#F21C63",
                fontSize: "0.9rem",
                fontWeight: "600",
                transition: "color 0.3s ease",
                "&:hover": { color: "#4285F4" },
              }}
            >
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                }}
                onClick={handleClick} // Al hacer clic en el enlace
              >
                {linkText || "Categoría"}
              </a>
            </Typography>
          </Box>

          {/* Título del post con hover effect */}
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "#333",
              cursor: "pointer",
              width: "90%",
              transition: "text-decoration 0.3s ease",
              textDecoration: hovered ? "underline" : "none", // Subrayado en el texto al hover
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick} // Al hacer clic en el título
          >
            {title}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Información sobre el creador y la fecha */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                color: "#211E26",
                fontWeight: "600",
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
            >
              Area:{area}
              {/* Por: {creator} */}
            </Typography>

            {/* Flecha para ir al artículo */}
            <Button
              size="small"
              endIcon={
                <ArrowForwardIcon
                  sx={{
                    transition: "color 0.3s ease",
                    color: hovered ? "#F21C63" : "#000", // Cambiar el color de la flecha
                  }}
                />
              }
              onClick={handleClick} // Al hacer clic en la flecha
              sx={{
                margin: { xs: "10px 0", md: "10px" },
                alignSelf: { xs: "flex-start", md: "flex-end" },
                cursor: "pointer",
              }}
              onMouseEnter={handleMouseEnter} // Activamos hover al pasar sobre la flecha
              onMouseLeave={handleMouseLeave}
            ></Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default RecursosMasUsadosBase;
