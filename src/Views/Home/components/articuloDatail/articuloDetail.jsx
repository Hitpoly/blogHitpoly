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
  CardContent,
} from "@mui/material";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../../components/footer/page";
import AppSocialAdvantages from "../../../HomeArticle/components/AppSocialAdvantages";
import CustomComponent from "../../../HomeArticle/components/AppCustomComponent";
import AppBenefitsIndex from "../../../HomeArticle/components/AppBenefitsIndex";

const ArticleDetail = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://apinewblog.hitpoly.com/ajax/getArticuloController.php")
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
      <Typography
        variant="h6"
        color="error"
        align="center"
        mt={5}
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
        align="center"
        mt={5}
      >
        Artículo no encontrado
      </Typography>
    );

  const formattedDate = article?.fecha_actual
    ? format(new Date(article.fecha_actual), "dd 'de' MMMM 'de' yyyy", {
        locale: es,
      })
    : "Fecha no disponible";

  const subtitles = article?.subtitles || [];

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

  console.log(articles);

  const AppArticleIndex = ({ title, subtitles }) => {
    return (
      <>
        {/* Título con estilo */}
        {/* <h1 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}>{title}</h1> */}

        {/* Lista de subtítulos */}
        <Box
          sx={{
            backgroundColor: "#F5F5F5",
            padding: 3,
            borderRadius: 2,
            boxShadow: 1,
            width: "50%",
            margin: "0 auto",
          }}
        >
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {subtitles.map((subtitle, index) => (
              <li
                key={index}
                style={{ marginBottom: "10px", textAlign: "center" }}
              >
                <a
                  href={subtitle.link}
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    display: "block",
                  }}
                >
                  {`${index + 1}. ${subtitle.text}`}
                </a>
              </li>
            ))}
          </ul>
        </Box>
      </>
    );
  };

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
          <Button
            onClick={() => navigate(-1)}
            startIcon={<ArrowBackIcon />}
            sx={{
              mb: 2,
              textTransform: "none",
              color: "primary.main",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Volver
          </Button>

          <Grid
            container
            spacing={2}
            alignItems="center"
          >
            <Grid
              md={6}
              item
              xs={12}
            >
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "#222", mb: 2 }}
              >
                {article.title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                mb={3}
              >
                {formattedDate}
              </Typography>
            </Grid>
            <Grid
              md={6}
              item
              xs={12}
            >
              {article.images?.[0] && (
                <img
                  src={article.images[0]}
                  alt="Artículo"
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              )}
            </Grid>
          </Grid>

          <Typography
            variant="body1"
            sx={{ fontSize: "1.2rem", color: "#444", mb: 3 }}
          >
            {article.content_blocks?.[0]}
          </Typography>
          {/* <Paper sx={{ p: 4, borderRadius: "10px", boxShadow: 3, bgcolor: "#0B8DB5", color: "white", mb: 3 }}> */}

          <CustomComponent />
          {/* </Paper> */}
          {/* <Paper sx={{ p: 4, borderRadius: "10px", boxShadow: 3, bgcolor: "#007baf", color: "white", mb: 3 }}>
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
        </Paper> */}
        </Container>
        <br />

        <AppArticleIndex
          title="Tabla de contenidos"
          subtitles={subtitles.map((subtitle, index) => ({
            text: subtitle, // Aquí lo dejamos como está, ya que subtitle es una cadena de texto
            link: `#subtitulo-${index}`,
          }))}
        />
        <br />
        <AppBenefitsIndex />
        <br />
        <Grid
          container
          spacing={3}
          justifyContent="center"
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{ maxWidth: "500px" }}
          >
            {article.content_blocks?.map((block, index) => {
              const midIndex = Math.floor(article.content_blocks?.length / 2);

              return (
                <Box
                  key={index}
                  sx={{
                    padding: 2,
                    mb: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Subtítulo */}
                  {article.subtitles?.[index] && (
                    <Typography
                      id={`subtitulo-${index}`}
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#333",
                        mb: 1,
                        fontSize: "1rem",
                      }}
                    >
                      {article.subtitles[index]}
                    </Typography>
                  )}

                  {/* Bloque de texto */}
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "0.95rem",
                      lineHeight: "1.5",
                      color: "#444",
                      mb: 2,
                      textAlign: "justify",
                    }}
                  >
                    {block}
                  </Typography>

                  {/* Imagen si existe */}
                  {article.images?.[index] && (
                    <img
                      src={article.images[index]}
                      alt={`Imagen ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "5px",
                        marginBottom: "10px",
                      }}
                    />
                  )}

                  {/* Bloque especial en la mitad */}
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

        <Container
          maxWidth="lg"
          sx={{ mt: 5, mb: 5 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 3,
              textAlign: "center",
              fontSize: "1.8rem",
            }}
          >
            Artículos relacionados
          </Typography>

          <Slider {...settings}>
            {articles.map((relatedArticle) => (
              <Card
                key={relatedArticle.article_id}
                sx={{
                  boxShadow: 3,
                  borderRadius: "10px",
                  maxWidth: 300,
                  height: 320,
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                }}
                onClick={() =>
                  navigate(`/article/${relatedArticle.article_id}`)
                }
              >
                <CardActionArea sx={{ height: "100%" }}>
                  {/* Imagen */}
                  {relatedArticle.images?.[0] && (
                    <CardMedia
                      component="img"
                      image={relatedArticle.images[0]}
                      alt={relatedArticle.title}
                      sx={{
                        height: 160,
                        objectFit: "cover",
                      }}
                    />
                  )}

                  {/* Contenido */}
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#E91E63",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "1rem",
                      }}
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
      <Footer />
    </>
  );
};

export default ArticleDetail;
