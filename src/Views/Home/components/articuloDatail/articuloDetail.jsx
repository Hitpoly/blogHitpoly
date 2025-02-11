import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  CardMedia,
  Grid,
  Button,
  Container,
} from "@mui/material";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Footer from "../../../components/footer/page";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
        console.log(data);
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Typography variant="h6">Cargando...</Typography>;
  if (error)
    return (
      <Typography
        variant="h6"
        color="error"
      >
        {error}
      </Typography>
    );

  const article = articles.find((art) => art.article_id == id);
  if (!article)
    return (
      <Typography
        variant="h6"
        color="error"
      >
        Artículo no encontrado
      </Typography>
    );

  const formattedDate = article?.fecha_actual
    ? format(new Date(article.fecha_actual), "dd 'de' MMMM 'de' yyyy", {
        locale: es,
      })
    : null;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Container sx={{ flexGrow: 1, marginTop: 11 }}>
        <Button
          onClick={() => navigate(-1)}
          startIcon={<ArrowBackIcon sx={{ fontWeight: "bold" }} />}
          sx={{
            mb: 2,
            textTransform: "none",
            color: "primary.main",
            fontWeight: "bold",
          }}
        >
          Volver
        </Button>

        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: "1.5rem",
            width: "100%",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "700",
                marginBottom: 2,
                fontSize: "3.4rem",
              }}
            >
              {article.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#666", marginBottom: 2, fontWeight: "700" }}
            >
              {article.area} - {formattedDate || "Fecha no disponible"}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#444", fontSize: "1.1rem", fontWeight: "600" }}
            >
              {article.content_blocks[0]}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
          >
            {article.images && article.images.length > 0 && (
              <CardMedia
                component="img"
                image={article.images[0]}
                alt="Imagen principal"
                sx={{
                  height: "100%",
                  backgroundSize: "cover",
                  objectFit: "cover",
                  borderRadius: "none",
                }}
              />
            )}
          </Grid>
        </Grid>

        {/* Contenido del artículo */}
        <Box sx={{ marginTop: 4 }}>
          {article.content_blocks.slice(2).map((block, index) => (
            <Typography
              key={index}
              variant={index % 2 === 0 ? "body1" : "h5"} // Par: h5 (título), Impar: body1 (párrafo)
              sx={{
                fontWeight: index % 2 === 0 ? "600" : "bold",
                color: index % 2 === 0 ? "#444" : "#222",
                fontSize: index % 2 === 0 ? "1.1rem" : "1.3rem",
                marginBottom: 2,
              }}
            >
              {block}
            </Typography>
          ))}
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default ArticleDetail;
