import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";

function VideosMasDestacados({
  image,
  title,
  linkArticle,
  linkText,
  duration,
  date,
}) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const handleClick = () => {
    navigate(linkArticle);
  };

  return (
    <Grid item xs={12} sm={6} md={4} sx={{ p: 0, m: 0 }}>
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
        {/* Imagen del post con efecto hover */}
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: "100%",
            borderRadius: "10px 10px 0px 0px",
            height: "250px",
            transition: "transform 0.3s ease",
            transform: hovered ? "scale(1.1)" : "scale(1)",
            cursor: "pointer",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        />

        {/* Contenido del card */}
        <CardContent
          sx={{
            position: "relative",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            borderRadius: "0px 0px 10px 10px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Categoría */}
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              variant="body2"
              sx={{
                color: "#F21C63",
                fontSize: "0.95rem",
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
                onClick={handleClick}
              >
                {linkText || "Categoría"}
              </a>
            </Typography>
          </Box>

          {/* Título del video */}
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
              textDecoration: hovered ? "underline" : "none",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            {title}
          </Typography>

          {/* Información del video */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Icono de Play y duración */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontWeight: "600",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <PlayArrowIcon sx={{ marginRight: "5px" }} /> {duration}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  marginLeft: "5px",
                }}
              >
                Min
              </Typography>
            </Typography>

            {/* Fecha y flecha */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  color: "#211E26",
                  fontWeight: "600",
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                  marginRight: "10px",
                }}
              >
                {date}
              </Typography>

              <ArrowForwardIcon
                sx={{
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  color: hovered ? "#F21C63" : "#000", // Cambiar color de la flecha
                }}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </Box>
          </Box>

          {/* Línea divisoria */}
          <Divider sx={{ margin: "10px 0" }} />
        </CardContent>
      </Card>
    </Grid>
  );
}

export default VideosMasDestacados;
