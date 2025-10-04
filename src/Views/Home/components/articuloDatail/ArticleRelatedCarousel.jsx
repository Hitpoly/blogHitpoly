import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  CardContent,
  IconButton,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";

// Función para generar slug (necesaria para la navegación)
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

// Componente para la flecha siguiente (Next Arrow)
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <IconButton
      className={className}
      sx={{
        ...style,
        display: "block",
        // Ajuste de posición: las flechas se definen con posición absoluta, 
        // pero las movemos fuera de la vista de las tarjetas con la clase `.slick-next` en el Box padre.
        right: 0, 
        zIndex: 1,
        color: "#6A788A",
        transform: 'translate(0, -50%)',
        "&::before": { display: 'none' },
        width: 40,
        height: 40,
        borderRadius: '50%',
        bgcolor: 'rgba(255, 255, 255, 0.9)', 
        boxShadow: 2,
        "&:hover": {
          bgcolor: 'rgba(255, 255, 255, 1)',
          color: '#E91E63',
        }
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon sx={{ fontSize: '1.2rem', ml: 0.5 }} />
    </IconButton>
  );
};

// Componente para la flecha anterior (Prev Arrow)
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <IconButton
      className={className}
      sx={{
        ...style,
        display: "block",
        left: 0, 
        zIndex: 1,
        color: "#6A788A",
        transform: 'translate(0, -50%)',
        "&::before": { display: 'none' },
        width: 40,
        height: 40,
        borderRadius: '50%',
        bgcolor: 'rgba(255, 255, 255, 0.9)', 
        boxShadow: 2,
        "&:hover": {
          bgcolor: 'rgba(255, 255, 255, 1)',
          color: '#E91E63',
        }
      }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon sx={{ fontSize: '1.2rem', mr: 0.5 }} />
    </IconButton>
  );
};

const ArticleRelatedCarousel = ({ articles, currentArticleId }) => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);

  // Manejador de click, utiliza el slugify localmente
  const handleCardClick = (relatedId, relatedTitle) => {
    if (!isDragging) {
      const slug = slugify(relatedTitle);
      navigate(`/article/${slug}-${relatedId}`);
      window.scrollTo(0, 0);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: () => setIsDragging(true),
    afterChange: () => setIsDragging(false),
    centerMode: true, 
    centerPadding: '60px', // Espacio para ver las tarjetas laterales (ajustable)
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 3,
          centerPadding: '40px',
        } 
      },
      { 
        breakpoint: 900, 
        settings: { 
          slidesToShow: 1, 
          centerMode: true,
          centerPadding: '60px',
        } 
      },
      { 
        breakpoint: 600, 
        settings: { 
          slidesToShow: 1, 
          centerMode: true,
          centerPadding: '20px',
        } 
      },
    ],
    // Estilos personalizados para los dots (puntos de navegación)
    appendDots: dots => (
      <Box sx={{ position: "absolute", bottom: "-40px", width: "100%" }}>
        <ul style={{ margin: "0px", padding: "0px", display: "flex", justifyContent: "center" }}>
          {dots.map((dot, index) => (
            <li key={index} style={{ margin: "0 5px" }}>
              {React.cloneElement(dot, {
                children: (
                  dot.props.className === "slick-active" ? (
                    <Box sx={{
                      width: 15, 
                      height: 15, 
                      borderRadius: "50%",
                      bgcolor: "#E91E63", 
                      display: "inline-block",
                      cursor: 'pointer',
                    }} />
                  ) : (
                    <Box sx={{
                      width: 10, 
                      height: 10, 
                      borderRadius: "50%",
                      bgcolor: "#D3D3D3", 
                      display: "inline-block",
                      cursor: 'pointer',
                    }} />
                  )
                )
              })}
            </li>
          ))}
        </ul>
      </Box>
    ),
  };

  const relatedArticles = articles.filter(
    (art) => String(art.article_id) !== String(currentArticleId)
  );

  if (relatedArticles.length === 0) return null;

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 8, position: 'relative' }}> 
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 5,
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        Artículos relacionados
      </Typography>

      <Box sx={{ 
        mx: 2, 
        ".slick-slider": {
            position: 'relative',
        },
        // Mueve la flecha anterior a la izquierda
        ".slick-prev": { 
            left: { xs: '-10px', sm: '-20px', md: '-30px', lg: '-40px' }, // Posición negativa para moverla fuera
            top: '40%',
            zIndex: 10, // Asegura que esté por encima de todo
        },
        // Mueve la flecha siguiente a la derecha
        ".slick-next": { 
            right: { xs: '-10px', sm: '-20px', md: '-30px', lg: '-40px' }, // Posición negativa para moverla fuera
            top: '40%',
            zIndex: 10,
        },
        // Estilos de modo centrado para la tarjeta activa y las laterales
        ".slick-slide": {
            transition: 'transform 0.3s, opacity 0.3s',
            // Estilo para las tarjetas inactivas (laterales)
            '&:not(.slick-center)': {
                transform: 'scale(0.85)', 
                opacity: 0.6, 
                pointerEvents: 'none', 
            },
        },
        ".slick-center": {
            transform: 'scale(1)', 
            opacity: 1, 
            pointerEvents: 'auto', 
        }
      }}>
        <Slider {...settings}>
          {relatedArticles.map((relatedArticle) => (
            // Contenedor que agrega padding a la tarjeta, evitando que choque con el borde del slide
            <Box key={relatedArticle.article_id} sx={{ padding: '10px' }}> 
                <Card
                  sx={{
                    boxShadow: 3, 
                    borderRadius: "10px",
                    height: 380, 
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    transition: 'none', 
                    "&:hover": { 
                        boxShadow: 6,
                    },
                  }}
                  onClick={() =>
                    handleCardClick(
                      relatedArticle.article_id,
                      relatedArticle.title
                    )
                  }
                >
                  <CardActionArea sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    {relatedArticle.post_image_url && (
                      <CardMedia
                        component="img"
                        image={relatedArticle.post_image_url}
                        alt={relatedArticle.title}
                        sx={{
                          height: 180,
                          objectFit: "cover",
                          borderTopLeftRadius: "10px",
                          borderTopRightRadius: "10px",
                        }}
                      />
                    )}
                    {/* Contenido de la tarjeta */}
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "20px", // Aumentar padding para despegar el contenido de los bordes
                        textAlign: "left",
                        width: '100%'
                      }}
                    >
                      <Box sx={{padding: 2, }}>
                        {/* Categoría */}
                        {relatedArticle.area && (
                          <Typography variant="caption" sx={{ 
                            color: "#E91E63", 
                            fontWeight: "bold", 
                            textTransform: 'uppercase', 
                            fontSize: '0.8rem' 
                          }}>
                            {relatedArticle.area}
                          </Typography>
                        )}
                        {/* Título */}
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#333",
                            fontWeight: "bold",
                            fontSize: "1.1rem",
                            mt: 0.5,
                            mb: 1,
                            lineHeight: 1.3,
                            // Se eliminó minHeight para evitar problemas de alineación
                          }}
                        >
                          {relatedArticle.title}
                        </Typography>
                      </Box>

                      {/* Fecha y Flecha */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, padding: 2,  }}>
                        {relatedArticle.fecha_actual && (
                          <Typography variant="body2" sx={{ color: "#6A788A", fontSize: '0.9rem' }}>
                            {format(new Date(relatedArticle.fecha_actual), "dd/MM/yyyy", { locale: es })}
                          </Typography>
                        )}
                         <ArrowForwardIosIcon sx={{ color: "#E91E63", fontSize: '1rem' }} />
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default ArticleRelatedCarousel;