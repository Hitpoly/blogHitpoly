import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";
import ArticleCard from "../../../components/cards/articulosSection";
import FreeRecursoCard from "../../../components/cards/recursoDescargable";

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


const VentasCards = () => {
  const [salesArticles, setSalesArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://apinewblog.hitpoly.com/ajax/getArticuloController.php`)
      .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos de la API recibidos para Ventas:", data);
        // Filtrar los artículos para la sección de 'ventas'
        const filteredArticles = data.filter(
          (article) => article.area === "ventas"
        );
        setSalesArticles(filteredArticles);
      })
      .catch((error) =>
        console.error("Error al obtener o procesar los artículos:", error)
      );
  }, []);
  
  // 🔄 LÓGICA AGREGADA: Recibe el ID y el título para generar el slug-id
  const handleArticleClick = (id, title) => {
    if (id && title) {
      const slug = slugify(title);
      // Asume que el ID real es article.article_id o similar, no article.id
      const path = `/article/${slug}-${id}`; 
      
      console.log("Redirigiendo a:", path);
      navigate(path);
    } else {
      console.error("ID o título del artículo no válido");
    }
  };


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
          {/* Las 4 cartas de los artículos sobre ventas */}
          <Grid
            item
            xs={12}
            md={9}
          >
            <Grid
              container
              spacing={1}
            >
              {/* Mostrar solo los primeros 4 artículos de ventas */}
              {salesArticles.slice(0, 4).map((article) => ( 
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
              {salesArticles.length === 0 && (
                <Grid item xs={12}>
                    <Typography variant="body1" color="textSecondary" align="center" sx={{p: 2}}>
                        Cargando artículos o no hay artículos de Ventas disponibles.
                    </Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default VentasCards;