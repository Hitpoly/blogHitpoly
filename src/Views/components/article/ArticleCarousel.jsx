import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button, Container } from "@mui/material";
import Slider from "react-slick"; // Necesitas instalar react-slick y slick-carousel

const ArticleCarousel = ({
  title = "Artículos relacionados",
  articles = [], // Lista de artículos a mostrar
  settings = {}, // Configuración personalizada del carrusel
}) => {
  // Configuración por defecto para el carrusel
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    ...settings, // Permitir que el usuario personalice las configuraciones
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", textAlign: "center", marginBottom: 3 }}
      >
        {title}
      </Typography>
      <Slider {...defaultSettings}>
        {articles.map((article, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 345,
              margin: "0 auto",
              borderRadius: 2,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={article.image}
              alt={article.title}
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "1rem", marginBottom: 1 }}
              >
                {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {article.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Leer más
              </Button>
            </CardActions>
          </Card>
        ))}
      </Slider>
    </Container>
  );
};

export default ArticleCarousel;
