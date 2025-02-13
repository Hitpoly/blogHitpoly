import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  List,
  ListItem,
  CircularProgress,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from "@mui/material";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const ArticleDetail = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://apiblog.hitpoly.com/ajax/getArticuloController.php")
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


  if (loading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  if (error)
    return (
      <Typography variant="h6" color="error" align="center" mt={5}>
        {error}
      </Typography>
    );

  const article = articles.find((art) => art.article_id == id);
  if (!article)
    return (
      <Typography variant="h6" color="error" align="center" mt={5}>
        Artículo no encontrado
      </Typography>
    );

  const formattedDate = article?.fecha_actual
    ? format(new Date(article.fecha_actual), "dd 'de' MMMM 'de' yyyy", { locale: es })
    : "Fecha no disponible";


    if (!articles || articles.length === 0) {
      return null;
    }
  
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 900, settings: { slidesToShow: 2 } },
        { breakpoint: 600, settings: { slidesToShow: 1 } },
      ],
    };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#fff" }}>
      <Container sx={{ flexGrow: 1, marginTop: 5, maxWidth: "900px" }}>
        <Button
          onClick={() => navigate(-1)}
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 2, textTransform: "none", color: "primary.main", fontWeight: "bold", fontSize: "1rem" }}
        >
          Volver
        </Button>
        
        
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8}>
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#222", mb: 2 }}>
              {article.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" mb={3}>
              {formattedDate}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            {article.images?.[0] && (
              <img src={article.images[0]} alt="Artículo" style={{ width: "100%", borderRadius: "10px" }} />
            )}
          </Grid>
        </Grid>
        

        <Typography variant="body1" sx={{ fontSize: "1.2rem", color: "#444", mb: 3 }}>
          {article.content_blocks?.[0]}
        </Typography>

       
        <Paper sx={{ p: 4, borderRadius: "10px", boxShadow: 3, bgcolor: "#007baf", color: "white", mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>Publicidad</Typography>
          <Typography variant="body1" sx={{ mt: 2, fontSize: "1.1rem" }}>
            Contenido publicitario aquí.
          </Typography>
          <List sx={{ mt: 2 }}>
            <ListItem>🔹 Punto destacado 1</ListItem>
            <ListItem>🔹 Punto destacado 2</ListItem>
            <ListItem>🔹 Punto destacado 3</ListItem>
          </List>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button variant="contained" color="secondary">
              Descargar gratis ahora
            </Button>
            <Button variant="outlined" sx={{ color: "white", borderColor: "white" }}>
              Más información →
            </Button>
          </Box>
        </Paper>

 
<Grid container spacing={3}>
  <Grid item xs={12} md={8}>
    {article.content_blocks?.map((block, index) => (
      <Box key={index} sx={{ mb: 4 }}>
       
        {index === 0 ? (
          <Typography variant="body1" sx={{ fontSize: "1.2rem", color: "#444", mb: 2 }}>
            {block}
          </Typography>
        ) : (
          
          <>
            {article.images?.[index] && (
              <img
                src={article.images[index]}
                alt={`Imagen ${index + 1}`}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  marginBottom: "10px",
                }}
              />
            )}
            <Typography variant="body1" sx={{ fontSize: "1.2rem", color: "#444" }}>
              {block}
            </Typography>
          </>
        )}
      </Box>
    ))}
  </Grid>
</Grid>

      </Container>

   
      <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }} align="center">
        Artículos relacionados
      </Typography>
      <Slider {...settings}>
        {articles.map((relatedArticle) => (
          <Card
            key={relatedArticle.article_id}
            sx={{
              boxShadow: 3,
              borderRadius: "10px",
              maxWidth: 320,
              height: 320, 
              display: "flex",
              flexDirection: "column",
            }}
            onClick={() => navigate(`/article/${relatedArticle.article_id}`)}
          >
            <CardActionArea sx={{ height: "100%" }}>
              {relatedArticle.images?.[0] && (
                <CardMedia
                  component="img"
                  image={relatedArticle.images[0]}
                  alt={relatedArticle.title}
                  sx={{
                    height: 180,
                    objectFit: "cover",
                  }}
                />
              )}
              <CardContent sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "#E91E63", fontWeight: "bold", textAlign: "center" }}
                >
                  {relatedArticle.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Slider>
    </Container>
    </Box>
  );
};

export default ArticleDetail;
