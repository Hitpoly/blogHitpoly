import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom"; // Asegúrate de que react-router-dom esté bien configurado
import ArticleCard from "../../../components/cards/articulosSection"; // Componente de Artículo
import FreeRecursoCard from "../../../components/cards/recursoDescargable"; // Componente de Plantilla Gratuita
import articlesData from "./tecnologiaSection.json"; // Datos de los artículos relacionados con tecnología

const TecnologiaCards = () => {
  const [technologyArticles, setTechnologyArticles] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost/bloghitpoly/ajax/getArticuloController.php`)
    fetch(`https://apiblog.hitpoly.com/ajax/getArticuloController.php`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const marquetingArticles = data.filter(
          (article) => article.area === "tecnologia"
        );
        setTechnologyArticles(marquetingArticles);
      })
      .catch((error) =>
        console.error("Error al obtener los artículos:", error)
      );
  }, []);

  const freeRecursoData = {
    title: "Guía para Iniciarte en la Digitalización en 2025",
    description:
      "Descarga esta plantilla para estructurar tu estrategia de digitalización de manera efectiva este 2025.",
    imageUrl: "/images/digitalizacionGlobal.jpg", // Asegúrate de tener una URL válida de la imagen
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
        {/* Encabezado de la sección de Tecnología */}
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
            Tecnología
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
            <Link
              to="/articulos-tecnologia"
              style={{ textDecoration: "none" }}
            >
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
                Ver más artículos sobre Tecnología
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
          {/* Las 4 cartas de los artículos sobre tecnología */}
          <Grid
            item
            xs={12}
            md={9}
          >
            <Grid
              container
              spacing={1}
            >
              {technologyArticles.map((article) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={article.id}
                >
                  <ArticleCard article={article} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/* Carta sola con la plantilla gratuita */}
          <Grid
            item
            xs={12}
            md={3}
          >
            <FreeRecursoCard
              title={freeRecursoData.title}
              description={freeRecursoData.description}
              imageUrl={freeRecursoData.imageUrl}
              buttonText={freeRecursoData.buttonText}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TecnologiaCards;
