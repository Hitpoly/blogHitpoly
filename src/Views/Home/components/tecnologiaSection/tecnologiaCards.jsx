import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Necesitas useNavigate para la función handleArticleClick
import { Box, Grid, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";
import ArticleCard from "../../../components/cards/articulosSection";
import FreeRecursoCard from "../../../components/cards/recursoDescargable";
// ❌ ELIMINADA: import articlesData from "./tecnologiaSection.json";

// 🔑 FUNCIÓN NECESARIA: Genera el slug a partir del título
const slugify = (text) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .trim()
    .replace(/[ñáéíóúü]/g, (match) => {
      const replacements = { 'ñ': 'n', 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u' };
      return replacements[match] || match;
    })
    .replace(/\s+/g, '-') 
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};


const TecnologiaCards = () => {
  const [technologyArticles, setTechnologyArticles] = useState([]);
  const navigate = useNavigate(); // Inicializa useNavigate

  useEffect(() => {
    fetch(`https://apinewblog.hitpoly.com/ajax/getArticuloController.php`)
      .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos de la API recibidos para Tecnología:", data);
        // Filtrar los artículos para la sección de 'tecnologia'
        const filteredArticles = data.filter(
          (article) => article.area === "tecnologia"
        );
        setTechnologyArticles(filteredArticles);
      })
      .catch((error) =>
        console.error("Error al obtener o procesar los artículos:", error)
      );
  }, []);
  
  // 🔄 LÓGICA AGREGADA: Recibe el ID y el título para generar el slug-id
  const handleArticleClick = (id, title) => {
    if (id && title) {
      const slug = slugify(title);
      // Asume que el ID real es article.article_id o similar
      const path = `/article/${slug}-${id}`; 
      
      console.log("Redirigiendo a:", path);
      navigate(path);
    } else {
      console.error("ID o título del artículo no válido");
    }
  };


  const freeRecursoData = {
    title: "Guía para Iniciarte en la Digitalización en 2025",
    description:
      "Descarga esta plantilla para estructurar tu estrategia de digitalización de manera efectiva este 2025.",
    imageUrl: "/images/digitalizacionGlobal.jpg", 
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
              {/* Mostrar solo los primeros 4 artículos de tecnología */}
              {technologyArticles.slice(0, 4).map((article) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  // Asegúrate de usar la propiedad correcta para la clave (id o article_id)
                  key={article.article_id || article.id} 
                  // 🚀 CAMBIO CLAVE: Llama a handleArticleClick con el ID y el título
                  onClick={() => handleArticleClick(article.article_id || article.id, article.title)}
                  sx={{ cursor: "pointer" }}
                >
                  <ArticleCard article={article} />
                </Grid>
              ))}
              {/* Mostrar mensaje si no hay artículos */}
              {technologyArticles.length === 0 && (
                <Grid item xs={12}>
                    <Typography variant="body1" color="textSecondary" align="center" sx={{p: 2}}>
                        Cargando artículos o no hay artículos de Tecnología disponibles.
                    </Typography>
                </Grid>
              )}
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