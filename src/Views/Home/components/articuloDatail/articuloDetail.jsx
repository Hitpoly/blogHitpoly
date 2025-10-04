import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  CircularProgress,
  Grid,
  Link,
  Breadcrumbs,
} from "@mui/material";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import ArticleRelatedCarousel from "./ArticleRelatedCarousel"; // <<< RUTA DE IMPORTACIÓN AJUSTABLE

// Estos imports se mantienen según tu código original
import Footer from "../../../components/footer/page";
import AppSocialAdvantages from "../../../HomeArticle/components/AppSocialAdvantages";
import CustomComponent from "../../../HomeArticle/components/AppCustomComponent";
import AppBenefitsIndex from "../../../HomeArticle/components/AppBenefitsIndex";

// Función para generar slug (Mantenida aquí porque se usa en Breadcrumbs y SEO)
const slugify = (text) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .trim()
    .replace(/[ñáéíóúü]/g, (match) => {
      const replacements = {
        ñ: "n",
        á: "a",
        é: "e",
        í: "i",
        ó: "o",
        ú: "u",
        ü: "u",
      };
      return replacements[match] || match;
    })
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

// Se eliminaron NextArrow y PrevArrow
// Se eliminó la configuración de slick-carousel

// Componente para la Tabla de Contenidos (Index) (SIN CAMBIOS)
const AppArticleIndex = ({ subtitles }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        padding: 3,
        borderRadius: 2,
        boxShadow: 1,
        width: { xs: "90%", md: "50%" },
        margin: "0 auto",
        mb: 4, 
      }}
    >
      <Typography
        variant="h6"
        sx={{ textAlign: "center", mb: 2, fontWeight: "bold" }}
      >
        Tabla de contenidos
      </Typography>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {subtitles.map((subtitle, index) => (
          <li
            key={index}
            style={{ marginBottom: "10px", textAlign: "center" }}
          >
            <Link
              href={`#subtitulo-${index}`} 
              style={{
                textDecoration: "none",
                color: "#333",
                fontSize: "1.05rem",
                display: "block",
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(`subtitulo-${index}`).scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              {`${index + 1}. ${subtitle.text}`}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};

const ArticleDetail = () => {
  const { slug_y_id } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  // El estado de arrastre ya no es necesario aquí, ya que el carrusel lo maneja internamente.
  // Sin embargo, si quieres mantener la lógica de click-prevención, el carrusel la tiene.

  let articleId = null;
  if (slug_y_id) {
    const parts = slug_y_id.split("-");
    articleId = parts[parts.length - 1];
  }

  // Hook para la carga de datos (SIN CAMBIOS)
  useEffect(() => {
    if (!articleId || isNaN(Number(articleId))) {
      setLoading(false);
      if (slug_y_id) {
        setError("ID de artículo no válido en la ruta.");
      }
      return;
    }

    fetch("https://apinewblog.hitpoly.com/ajax/getArticuloController.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los artículos.");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [articleId, slug_y_id]);

  // Se eliminó la función handleCardClick de aquí, ya que se encuentra dentro de ArticleRelatedCarousel.

  // Estados de carga y error (SIN CAMBIOS)
  if (loading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  if (error)
    return (
      <Typography variant="h6" color="error" align="center" mt={5}>
        {error}
      </Typography>
    );

  // Encontrar el artículo actual (SIN CAMBIOS)
  const article = articles.find(
    (art) => String(art.article_id) === String(articleId)
  );

  if (!article)
    return (
      <Typography variant="h6" color="error" align="center" mt={5}>
        Artículo no encontrado. (ID Buscado: {articleId})
      </Typography>
    );

  // Redirección para URLs incorrectas de slug (SEO) (SIN CAMBIOS)
  const correctSlug = slugify(article.title);
  const correctPath = `/article/${correctSlug}-${article.article_id}`;

  if (location.pathname !== correctPath) {
    navigate(correctPath, { replace: true });
    return null;
  }

  // Formato de fecha (SIN CAMBIOS)
  const formattedDate = article?.fecha_actual
    ? format(new Date(article.fecha_actual), "dd 'de' MMMM 'de' yyyy", {
        locale: es,
      })
    : "Fecha no disponible";

  const subtitles = article?.subtitles || [];

  // Función para renderizar el primer bloque de contenido en párrafos (SIN CAMBIOS)
  const renderIntroContent = (contentBlock) => {
    if (!contentBlock) return null;
    return contentBlock.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null;
      return (
        <Typography
          key={index}
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            color: "#444",
            mt: 0,
            mb: 2,
            textAlign: 'left'
          }}
        >
          {paragraph.trim()}
        </Typography>
      );
    });
  };

  // Se eliminó la configuración de react-slick (settings)

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          bgcolor: "#fff",
        }}
      >
        <Container sx={{ flexGrow: 1, marginTop: 5, maxWidth: "900px" }}>
          {/* Breadcrumbs (SIN CAMBIOS) */}
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
            <Link underline="hover" color="inherit" component={Link} to="/">
              Inicio
            </Link>
            {article.area && (
              <Link
                underline="hover"
                color="inherit"
                component={Link}
                to={`/articulos-${slugify(article.area)}`}
              >
                {article.area.charAt(0).toUpperCase() + article.area.slice(1)}{" "}
              </Link>
            )}
            <Typography color="text.primary">{article.title}</Typography>
          </Breadcrumbs>

          <Grid container spacing={4} alignItems="center">
            {/* Título, Fecha y Autor (SIN CAMBIOS) */}
            <Grid md={6} item xs={12}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: "#333",
                  mb: 2,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                }}
              >
                {article.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#6A788A", mb: 0.5 }}>
                Actualizado: {formattedDate}
              </Typography>
              {article.author_name && (
                <Typography variant="body2" sx={{ color: "#6A788A", mb: 3 }}>
                  Escrito por: {article.author_name}
                </Typography>
              )}
            </Grid>
            {/* Imagen principal (SIN CAMBIOS) */}
            <Grid md={6} item xs={12}>
              {article.post_image_url && (
                <img
                  src={article.post_image_url}
                  alt="Artículo"
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
              )}
            </Grid>
          </Grid>

          {/* Primer bloque de contenido (Introducción) (SIN CAMBIOS) */}
          <Box sx={{ mt: 4, mb: 3, textAlign: 'left' }}>
            {renderIntroContent(article.content_blocks?.[0])}
          </Box>
          
          {/* Componente Custom (SIN CAMBIOS) */}
          <CustomComponent />
        </Container>
        <br />

        {/* Tabla de Contenidos (SIN CAMBIOS) */}
        {subtitles.length > 0 && <AppArticleIndex
            subtitles={subtitles.map((subtitle) => ({ text: subtitle, link: `#` }))}
        />}
        <br />
        
        {/* Componente de Beneficios/Índice Adicional (SIN CAMBIOS) */}
        <AppBenefitsIndex />
        <br />
        
        {/* Contenido principal del artículo (SIN CAMBIOS) */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8} sx={{ maxWidth: "900px" }}>
            {article.content_blocks?.map((block, index) => {
              if (index === 0) return null; 

              const midIndex = Math.floor(article.content_blocks?.length / 2);

              return (
                <Box
                  key={index}
                  sx={{ padding: 2, mb: 4, display: "flex", flexDirection: "column", alignItems: "flex-start" }}
                >
                  {article.subtitles?.[index - 1] && (
                    <Typography
                      id={`subtitulo-${index - 1}`}
                      variant="h5"
                      component="h2"
                      sx={{ fontWeight: "bold", color: "#333", mb: 2, fontSize: "1.5rem" }}
                    >
                      {article.subtitles[index - 1]}
                    </Typography>
                  )}

                  <Typography
                    variant="body1"
                    sx={{ fontSize: "1rem", lineHeight: "1.6", color: "#444", mb: 2, textAlign: "justify" }}
                    dangerouslySetInnerHTML={{ __html: block.replace(/\n/g, "<br/>") }}
                  />

                  {article.images?.[index] && (
                    <img
                      src={article.images[index]}
                      alt={`Imagen ${index}`}
                      style={{ width: "100%", height: "auto", borderRadius: "5px", marginBottom: "10px" }}
                    />
                  )}

                  {index === midIndex && (
                    <Box sx={{ mt: 4, textAlign: "center", width: "100%" }}>
                      <AppSocialAdvantages />
                    </Box>
                  )}
                </Box>
              );
            })}
          </Grid>
        </Grid>

        {/* USO DEL NUEVO CARRUSEL IMPORTADO */}
        {articles.length > 0 && articleId && (
            <ArticleRelatedCarousel 
                articles={articles} 
                currentArticleId={articleId} 
            />
        )}
        
      </Box>
      <Footer />
    </>
  );
};

export default ArticleDetail;