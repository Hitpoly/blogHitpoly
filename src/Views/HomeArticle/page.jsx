import React, { useEffect, useState } from "react";
import { Box, Container, CircularProgress, Typography } from "@mui/material";
import IndexSection from "../components/article/IndexSection";
import DownloadIcon from "@mui/icons-material/Download";
import Footer from "../components/footer/page";
import { useParams } from "react-router-dom";

const HomeArticle = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
  console.log("ARTICULOS:", articles);

  const handleButtonClick = () => {
    alert("¡Guía descargada!");
  };

  // Verificar si el artículo está disponible

  if (loading) return <Typography variant="h6">Cargando...</Typography>;
  if (error) return <Typography variant="h6" color="error">{error}</Typography>;

  const article = articles.find((art) => art.article_id == id); // Buscar por el ID del artículo
  if (!article) return <Typography variant="h6" color="error">Artículo no encontrado</Typography>;

  return (
    <Box>
     <IndexSection
      breadcrumb="Home > Articles"
      title={article.title}
      area={article.area}
      date={article.fecha_actual}
      buttonText="Read more"
      buttonIcon={<span>📖</span>} // Puedes poner el icono que desees
      onButtonClick={() => alert("Button clicked!")}
      backgroundImage={article.post_image_url}
      contentText={article.content_blocks}
      images={article.images} 
    />
      <Footer />
    </Box>
  );
};

export default HomeArticle;
