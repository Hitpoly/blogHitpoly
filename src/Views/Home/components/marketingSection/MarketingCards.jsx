import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";
import ArticleCard from "../../../components/cards/articulosSection";
import FreeRecursoCard from "../../../components/cards/recursoDescargable";
import articlesData from "./marketingSection.json";

const MarketingCards = () => {
  const [salesArticles, setSalesArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {    
    fetch(`https://apinewblog.hitpoly.com/ajax/getArticuloController.php`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const marquetingArticles = data.filter(
          (article) => article.area === "marketing"
        );
        setSalesArticles(marquetingArticles);
      })
      .catch((error) =>
        console.error("Error al obtener los artículos:", error)
      );
  }, []);

  const handleArticleClick = (id) => {
    if (id) {
      navigate(`/article/${id}`);
    } else {
      console.error("ID del artículo no válido");
    }
  };

  // Datos para la tarjeta de plantilla gratuita
  const freeRecursoData = {
    title: "Plantilla Gratuita para tu Estrategia de Marketing",
    description:
      "Descarga esta plantilla para estructurar tu estrategia de marketing de manera efectiva.",
    imageUrl: "/images/estrategiaDeMarketing.jpg", // Asegúrate de tener una URL válida de la imagen
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
        {/* Encabezado */}
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
            Marketing
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
              to="/articulos-ventas"
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
                Ver más artículos sobre Marketing
                <ArrowOutwardIcon sx={{ color: "inherit" }} />
              </Typography>
            </Link>
          </Box>
        </Box>

        {/* Nueva disposición */}
        <Grid
          container
          spacing={1}
          sx={{ flexDirection: "row", margin: 0, padding: 0 }}
        >
          {/* Las 4 cartas de los artículos */}
          <Grid
            item
            xs={12}
            md={9}
          >
            <Grid
              container
              spacing={1}
            >
              {salesArticles.map((article) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  key={article.id}
                  onClick={() => handleArticleClick(article.id)}
                  sx={{ cursor: "pointer" }}
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

export default MarketingCards;
