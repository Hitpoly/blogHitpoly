import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import BookIcon from "@mui/icons-material/Book";
import LinkIcon from "@mui/icons-material/Link";
import { Link } from "react-router-dom";

// Función para aplicar los colores a los íconos
const iconStyle = (color) => ({
  color: color,
});

const SubmenuRecursosMovil = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const resources = [
    {
      title: "Cursos Digitales",
      items: [
        { name: "Curso de Marketing Digital", link: "/curso-marketing-digital", icon: <SchoolIcon sx={iconStyle('#4285F4')} /> },
        { name: "Curso de SEO", link: "/curso-seo", icon: <BookIcon sx={iconStyle('#0F9D58')} /> },
        { name: "Curso de Redes Sociales", link: "/curso-redes-sociales", icon: <FileCopyIcon sx={iconStyle('#FF9800')} /> },
      ],
    },
    {
      title: "Materiales Descargables",
      items: [
        { name: "Guía de Google Ads", link: "/guia-google-ads", icon: <FileCopyIcon sx={iconStyle('#DB4437')} /> },
        { name: "Plantillas para Redes Sociales", link: "/plantillas-redes-sociales", icon: <BookIcon sx={iconStyle('#F4B400')} /> },
        { name: "E-books sobre Marketing", link: "/ebooks-marketing", icon: <SchoolIcon sx={iconStyle('#34A853')} /> },
      ],
    },
    {
      title: "Herramientas Gratis",
      items: [
        { name: "Generador de Meta Ads", link: "/generador-meta-ads", icon: <LinkIcon sx={iconStyle('#3B82F6')} /> },
        { name: "Calculadora de ROI", link: "/calculadora-roi", icon: <LinkIcon sx={iconStyle('#FFB300')} /> },
      ],
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <Grid container spacing={3}>
        {resources.map((resourceCategory, categoryIndex) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            key={categoryIndex}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                color: "#333",
                marginBottom: "16px",
                fontSize: isMobile ? "14px" : "16px",
              }}
            >
              {resourceCategory.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {/* Mostrar solo el primer recurso si es móvil */}
              {isMobile ? (
                <Link
                  key={0}
                  to={resourceCategory.items[0].link}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px",
                      borderRadius: "4px",
                      transition: "background-color 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                  >
                    {resourceCategory.items[0].icon}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#555",
                        textAlign: "left"
                      }}
                    >
                      {resourceCategory.items[0].name}
                    </Typography>
                  </Box>
                </Link>
              ) : (
                // Si no es móvil, mostrar todos los recursos
                resourceCategory.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    to={item.link}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "8px",
                        borderRadius: "4px",
                        transition: "background-color 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#f5f5f5",
                        },
                      }}
                    >
                      {item.icon}
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#555",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  </Link>
                ))
              )}

              {isMobile && (
                <Link
                  to="#"
                  style={{
                    textDecoration: "none",
                    color: "#007BFF",
                    marginTop: "8px",
                  }}
                >
                  <Typography variant="body2" sx={{ textAlign: "center" }}>
                    Ver todos los recursos
                  </Typography>
                </Link>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SubmenuRecursosMovil;
