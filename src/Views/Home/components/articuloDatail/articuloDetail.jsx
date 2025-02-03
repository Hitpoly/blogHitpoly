import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, CardMedia, Button } from "@mui/material";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const ArticleDetail = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // fetch(`http://localhost/bloghitpoly/ajax/getArticuloController.php`)
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

  console.log("ARTICULOS:", articles);

  if (loading) return <Typography variant="h6">Cargando...</Typography>;
  if (error) return <Typography variant="h6" color="error">{error}</Typography>;

  const article = articles.find((art) => art.article_id == id); // Buscar por el ID del artículo
  if (!article) return <Typography variant="h6" color="error">Artículo no encontrado</Typography>;

  const formattedDate = article?.fecha_actual ? format(new Date(article.fecha_actual), "dd 'de' MMMM 'de' yyyy", { locale: es }) : null;

  const handleGoBack = () => navigate("/dashboardBlog/articulos");

  // Función para distribuir las imágenes
  const distributeImages = (contentIndex) => {
    const images = article.images || [];
    const numImages = images.length;

    // Retorna las imágenes correspondientes a la posición en el contenido
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
      <Box sx={{ padding: 4, maxWidth: 900, margin: "auto", mt: 10 }}>
        <br/>
        <br/>
        <br/>
    
      <Typography variant="h3" sx={{ fontWeight: 600, textAlign: "center", marginBottom: 3 }}>
        {article.title}
      </Typography>

      <Typography variant="body2" sx={{ color: "#A0A0A0", textAlign: "center", marginBottom: 3 }}>
        {article.area} - {formattedDate || "Fecha no disponible"}
      </Typography>

      {/* Iterar sobre los bloques de contenido (párrafos) */}
      {article.content_blocks && article.content_blocks.length > 0 && (
        <Box sx={{ marginBottom: 3 }}>
          {article.content_blocks.map((content, index) => {
            // Determine if the content is a subtitle or a paragraph
            const isSubtitle = content.length < 150; // Consider content with less than 150 characters as a subtitle
            const isParagraph = !isSubtitle;

            return (
              <Box key={index} sx={{ marginBottom: 3 }}>
                {/* Mostrar imagen si corresponde en la posición correcta */}
                {distributeImages(index).map((image, imgIndex) => (
                  <CardMedia
                    key={imgIndex}
                    component="img"
                    height="300"
                    image={image} // Usamos la imagen distribuida
                    alt={`Imagen ${index + 1}`}
                    sx={{
                      borderRadius: 2,
                      boxShadow: 3,
                      objectFit: "cover",
                      marginBottom: 3,
                      display: "block", // Asegura que las imágenes no se alineen todas juntas
                      margin: "auto",   // Centra cada imagen en su contenedor
                    }}
                  />
                ))}

                {/* Mostrar contenido (título o párrafo) */}
                {isSubtitle && (
                  <Typography variant="h6" sx={{ fontWeight: 500, marginBottom: 1 }}>
                    {content}
                  </Typography>
                )}
                {isParagraph && (
                  <Typography variant="body1" sx={{ textAlign: "justify", lineHeight: 1.8 }}>
                    {content}
                  </Typography>
                )}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default ArticleDetail;
