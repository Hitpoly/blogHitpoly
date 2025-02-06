import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, CardMedia, Grid, Button } from "@mui/material";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Footer from "../../../components/footer/page";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ArticleDetail = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://apiblog.hitpoly.com/ajax/getArticuloController.php`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Typography variant="h6">Cargando...</Typography>;
  if (error) return <Typography variant="h6" color="error">{error}</Typography>;

  const article = articles.find((art) => art.article_id == id);
  if (!article) return <Typography variant="h6" color="error">Artículo no encontrado</Typography>;

  const formattedDate = article?.fecha_actual
    ? format(new Date(article.fecha_actual), "dd 'de' MMMM 'de' yyyy", { locale: es })
    : null;

  const distributeImages = (contentIndex) => {
    const images = article.images || [];
    const numImages = images.length;

    if (numImages === 0) return [];
    if (numImages === 1) return [images[0]];
    if (numImages === 2) {
      if (contentIndex === 0) return [images[0]];
      if (contentIndex === article.content_blocks.length - 1) return [images[1]];
      return [];
    }
    if (numImages >= 3) {
      if (contentIndex === 0) return [images[0]];
      if (contentIndex === Math.floor(article.content_blocks.length / 2)) return [images[1]];
      if (contentIndex === article.content_blocks.length - 1) return [images[2]];
      return [];
    }
    return [];
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box sx={{ flexGrow: 1, maxWidth: "76%", margin: "auto", marginTop: 11 }}>
        <Button
            onClick={() => navigate(-1)}
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 1, textTransform: "none", color: "primary.main", textAlign: "justify" }}
          >
            Volver
          </Button>
        <Box sx={{ textAlign: "center", marginBottom: 3 }}>          
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2, textAlign: "justify" }}>
            {article.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#A0A0A0", marginBottom: 6, textAlign: "justify" }}>
            {article.area} - {formattedDate || "Fecha no disponible"}
          </Typography>
        </Box>

        {/* Contenido del artículo */}
        <Grid container direction="column" spacing={4} alignItems="center" justifyContent="center">
          {article.content_blocks && article.content_blocks.length > 0 && (
            <Box sx={{ marginBottom: 3, width: "100%" }}>
              {article.content_blocks.map((content, index) => {
                const isSubtitle = content.length < 150;
                return (
                  <Box key={index} sx={{ marginBottom: 3, textAlign: "center" }}>
                    {/* Imágenes */}
                    {distributeImages(index).map((image, imgIndex) => (
                      <CardMedia
                        key={imgIndex}
                        component="img"
                        height="250"
                        image={image}
                        alt={`Imagen ${index + 1}`}
                        sx={{
                          borderRadius: 4,
                          backgroundSize: "cover",
                          boxShadow: 3,
                          objectFit: "cover",
                          marginBottom: 3,
                          display: "block",
                          margin: "auto",
                          width: "90%",
                        }}
                      />
                    ))}

                    {/* Texto */}
                    {isSubtitle ? (
                      <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: 1, textAlign: "justify" }}>
                        {content}
                      </Typography>
                    ) : (
                      <Typography variant="body2" sx={{ textAlign: "justify", lineHeight: 1.6, marginTop: 3 }}>
                        {content}
                      </Typography>
                    )}
                  </Box>
                );
              })}
            </Box>
          )}
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default ArticleDetail;
