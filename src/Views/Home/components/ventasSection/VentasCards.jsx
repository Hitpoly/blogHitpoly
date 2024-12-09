import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom"; // Asegúrate de que react-router-dom esté bien configurado
import ArticleCard from "../../../components/cards/articulosSection"; // Componente de Artículo
import FreeRecursoCard from "../../../components/cards/recursoDescargable"; // Componente de Plantilla Gratuita
import articlesData from "./ventasSection.json"; // Datos de los artículos relacionados con ventas

const VentasCards = () => {
  const [salesArticles, setSalesArticles] = useState([]);

  // Cargar los artículos cuando el componente se monta
  useEffect(() => {
    setSalesArticles(articlesData);
  }, []);

  // Datos para la tarjeta de plantilla gratuita
  const freeRecursoData = {
    title: "Plantilla Gratuita para tu Estrategia de Ventas 2025",
    description:
      "Descarga esta plantilla para estructurar tu estrategia de ventas para el 2025 de manera efectiva.",
    imageUrl: "/images/estrategiaDeVentas.jpg", // Asegúrate de tener una URL válida de la imagen
    buttonText: "Descargar ahora",
  };
  

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: { xs: "0px", md: "40px" },
        }}
      >
        {/* Encabezado de la sección de Ventas */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
            marginTop: "60px",
            padding: "0px 30px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#F21C63",
              textTransform: "uppercase",
              fontWeight: "bold",
              letterSpacing: "2px",
              fontSize: "1rem",
            }}
          >
            Ventas
          </Typography>
          <Box
            sx={{
              height: "4px",
              width: "60%",
              backgroundColor: "#F21C63",
              borderRadius: "25px",
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="/articulos-ventas" style={{ textDecoration: "none" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  gap: 2,
                  color: "#F21C63",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { color: "#4285F4" },
                  "&:hover svg": { color: "#4285F4" },
                }}
              >
                Ver más artículos sobre Ventas
                <ArrowOutwardIcon sx={{ color: "inherit" }} />
              </Typography>
            </Link>
          </Box>
        </Box>

        {/* Contenedor de las cartas de artículos y recurso */}
        <Grid
          container
          spacing={1}
          sx={{ flexDirection: "row", margin: 0, padding: 0 }}
        >
          {/* Carta sola con la plantilla gratuita */}
          <Grid item xs={12} md={3}>
            <FreeRecursoCard
              title={freeRecursoData.title}
              description={freeRecursoData.description}
              imageUrl={freeRecursoData.imageUrl}
              buttonText={freeRecursoData.buttonText}
            />
          </Grid>
          {/* Las 4 cartas de los artículos sobre ventas */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={1}>
              {salesArticles.map((article) => (
                <Grid item xs={12} md={6} key={article.id}>
                  <ArticleCard article={article} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default VentasCards;
