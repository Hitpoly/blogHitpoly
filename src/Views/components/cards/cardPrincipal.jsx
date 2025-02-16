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

function PostCardOne({
  image,
  title,
  subtitle,
  creator,
  date,
  linkArticle, // Recibe el linkArticle con el ID de la URL
  linkText,
}) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const handleClick = (e) => {
    e.stopPropagation(); // Previene que el evento se propague y cause problemas de navegación
    navigate(linkArticle); // Navega al artículo usando el linkArticle
  };

  return (
    <Grid item xs={12} sm={12} md={12}>
      <Card
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          boxShadow: "none",
          padding: "0px 10px",
        }}
      >
        {/* Imagen del post con hover effect */}
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: "100%",
            borderRadius: "10px 10px 10px 10px",
            height: "60vh",
            transition: "transform 0.3s ease", // Transición suave
            transform: hovered ? "scale(1.1)" : "scale(1)", // Efecto de lupa en la imagen
            cursor: "pointer",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick} // Ejecutar la función de navegación al hacer clic en la imagen
        />

        {/* Caja con contenido */}
        <Box
          sx={{
            position: "relative",
            bottom: "100px",
            paddingLeft: "30px",
          }}
        >
          <CardContent
            sx={{
              position: "relative",
              padding: "50px 30px",
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              borderRadius: "25px 0px 25px 25px",
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
                <span
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                  onClick={handleClick} // Ejecutar la función de navegación
                >
                  {linkText || "Categoría"}
                </span>
              </Typography>
            </Box>

            {/* Título del post con hover effect */}
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontSize: "1.9rem",
                fontWeight: "500",
                color: "#333",
                width: "90%",
                transition: "text-decoration 0.3s ease",
                textDecoration: hovered ? "underline" : "none", // Subrayado en el texto al hover
                cursor: "pointer",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick} // Ejecutar la función de navegación al hacer clic en el título
            >
              {title}
            </Typography>

            {/* Subtítulo del post */}
            <Typography
              variant="body2"
              color="text.secondary"
              paragraph
              sx={{ fontSize: "1rem", color: "#555", width: "90%" }}
            >
              {subtitle}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "center" },
              }}
            >
              {/* Información sobre el creador y la fecha */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "#777", fontStyle: "italic", fontSize: "1rem" }}
              >
                Por {creator} | {date}
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
                onClick={handleClick} // Ejecutar la función de navegación al hacer clic en la flecha
                sx={{
                  margin: { xs: "10px 0", md: "10px" },
                  alignSelf: { xs: "flex-start", md: "flex-end" },
                  cursor: "pointer",
                }}
                onMouseEnter={handleMouseEnter} // Activamos hover al pasar sobre la flecha
                onMouseLeave={handleMouseLeave}
              >
                Leer artículo
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
}

export default PostCardOne;
