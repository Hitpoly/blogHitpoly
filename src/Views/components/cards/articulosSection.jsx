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
        flexDirection: { xs: "column", md: "row" },
        padding: "20px",
        position: "relative",
      }}
    >
      {/* Imagen pequeña */}
      <Box
        sx={{
          position: "relative",
          flexShrink: 0,
          marginRight: { xs: "0", md: "20px" },
          marginBottom: { xs: "20px", md: "0" },
          width: { xs: "100%", md: "120px" },
          height: { xs: "200px", md: "120px" },
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        <img
          src={article.post_image_url}
          alt={article.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </Box>

      {/* Contenido */}
      <CardContent sx={{ flexGrow: 1, textAlign: "left" }}>
        <Typography
          variant="body2"
          sx={{ color: "#B51AD8" }}
        >
          {article.fecha_actual}
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
          <Link
            to={article.linkArticle}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {article.title}
          </Link>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#A0A0A0", fontSize: "1rem" }}
        >
          {article.description}
        </Typography>
      </CardContent>

      {/* Contenedor del ícono y texto */}
      <Box
        sx={{
          position: { xs: "static", md: "absolute" },
          bottom: { md: "10px" },
          right: { md: "20px" },
          marginTop: { xs: "20px", md: "0" },
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: "center",
        }}
      >
        <Link
          to={article.linkArticle}
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              backgroundColor: "#F21C63",
              borderRadius: { xs: "25px", md: "50%" },
              padding: { xs: "10px 15px", md: "3px" },
              width: { xs: "auto", md: "auto" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: "8px", md: "0" },
              cursor: "pointer",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.2)",
                backgroundColor: "#e11b55",
              },
            }}
          >
            <ArrowOutwardIcon
              sx={{ color: "#fff", fontSize: { xs: "20px", md: "inherit" } }}
            />
            {/* Texto adicional solo para móviles */}
            <Typography
              sx={{
                display: { xs: "block", md: "none" },
                color: "#fff",
                fontSize: "0.9rem",
                fontWeight: "bold",
              }}
            >
              Ver artículo
            </Typography>
          </Box>
        </Link>
      </Box>
    </Card>
  );
};

export default ArticleCard;
