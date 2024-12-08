import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ArticleCard = ({ article }) => {
  return (
    <Card
      sx={{
        color: "#211E26",
        borderRadius: "15px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
        margin: "0px",
        display: "flex",
        flexDirection: "row",
        padding: "20px",
        position: "relative",
      }}
    >
      {/* Imagen pequeña a la izquierda */}
      <Box
        sx={{
          position: "relative",
          flexShrink: 0,
          marginRight: "20px",
          width: "120px", // Tamaño pequeño
          height: "120px", // Tamaño pequeño
          overflow: "hidden", // Para asegurar que la imagen no se desborde
          borderRadius: "10px", // Bordes redondeados
        }}
      >
        <img
          src={article.image}
          alt={article.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Esto asegura que la imagen se ajuste correctamente
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </Box>

      {/* Contenido */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" sx={{ color: "#B51AD8" }}>
          {article.date}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.2rem",
            fontWeight: "500",
            color: "#333",
            cursor: "pointer",
            margin: "10px 0",
            textDecoration: "none",
            textUnderlineOffset: "4px",
            textDecorationThickness: "2px",
            transition: "color 0.3s ease, text-decoration 0.3s ease",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Link to={article.linkArticle} style={{ textDecoration: "none", color: "inherit" }}>
            {article.title}
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ color: "#A0A0A0", fontSize: "1rem" }}>
          {article.description}
        </Typography>
      </CardContent>

      {/* Flecha a la derecha */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          right: { xs: "10px", md: "20px" },
          backgroundColor: "#F21C63",
          borderRadius: "50%",
          padding: "3px",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.2)",
            backgroundColor: "#e11b55",
          },
        }}
      >
        <Link to={article.linkArticle} style={{ textDecoration: "none" }}>
          <ArrowOutwardIcon sx={{ color: "#fff" }} />
        </Link>
      </Box>
    </Card>
  );
};

export default ArticleCard;
