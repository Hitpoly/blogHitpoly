import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useNavigate } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const articlesPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {

    // fetch("http://localhost/bloghitpoly/ajax/getArticuloController.php")
    fetch("https://apiblog.hitpoly.com/ajax/getArticuloController.php")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setArticles(data);
        } else {
          setError("No se encontraron artículos.");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleArticleClick = (id) => {
    navigate(`/article/${id}`);
  };

  const indexOfLastArticle = page * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const nextPage = () => {
    if (page * articlesPerPage < articles.length) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="h6">Cargando...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Contenedor de artículos */}
      <Box sx={{ flexGrow: 1, padding: "20px" }}>
        <Grid container spacing={4} justifyContent="center">
          {currentArticles.length === 0 ? (
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Typography variant="h6" color="textSecondary">
                No hay artículos disponibles.
              </Typography>
            </Box>
          ) : (
            currentArticles.map((article, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  onClick={() => handleArticleClick(article.article_id)}
                  sx={{
                    width: "100%",
                    color: "#FFFFFF",
                    borderRadius: "15px",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={article.post_image_url || "../../../assets/Desarrollo.webp"}
                    alt={article.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: "#B51AD8", marginBottom: "10px" }}
                    >
                      {article.area}{" "}
                      {format(new Date(article.fecha_actual), "dd 'de' MMMM 'de' yyyy", {
                        locale: es,
                      })}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: "#211E26", marginBottom: "10px" }}
                    >
                      {article.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Box>

      {/* Contenedor de paginado */}
      <Box sx={{ textAlign: "center", marginTop: "20px", paddingBottom: "20px" }}>
        <Button onClick={prevPage} disabled={page === 1} sx={{ marginRight: "10px" }}>
          Anterior
        </Button>
        <Button onClick={nextPage} disabled={page * articlesPerPage >= articles.length}>
          Siguiente
        </Button>
      </Box>
    </Box>
  );
};

export default ArticleList;
