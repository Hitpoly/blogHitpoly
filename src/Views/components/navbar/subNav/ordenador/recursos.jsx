import React, { useState } from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School"; 
import LanguageIcon from "@mui/icons-material/Language"; 
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; 
import WorkIcon from "@mui/icons-material/Work"; 
import BusinessIcon from "@mui/icons-material/Business"; 
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard"; 
import LinkIcon from "@mui/icons-material/Link"; 
import { Link } from "react-router-dom";

// Función para aplicar los colores a los íconos
const iconStyle = (color) => ({
  color: color,
});

const SubmenuRecursos = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [showAll, setShowAll] = useState(false); // Estado para controlar si mostrar todos los recursos

  const resources = [
    {
      title: "Recursos para Profesionales",
      items: [
        { name: "Cursos Digitales Gratuitos", link: "/cursos-gratuitos", icon: <SchoolIcon sx={iconStyle('#FF5722')} /> },
        { name: "Artículos y Guías", link: "/articulos-guia", icon: <LanguageIcon sx={iconStyle('#4CAF50')} /> },
        { name: "Webinars y Talleres", link: "/webinars", icon: <WorkIcon sx={iconStyle('#2196F3')} /> },
      ],
    },
    {
      title: "Recursos para Marcas y Pequeñas Empresas",
      items: [
        { name: "E-books y Plantillas", link: "/ebooks-plantillas", icon: <AttachMoneyIcon sx={iconStyle('#FFC107')} /> },
        { name: "Casos de Éxito", link: "/casos-exito", icon: <BusinessIcon sx={iconStyle('#8BC34A')} /> },
        { name: "Cursos de Marketing Digital", link: "/cursos-marketing", icon: <SchoolIcon sx={iconStyle('#FF9800')} /> },
        { name: "Consultoría Gratis", link: "/consultoria-gratis", icon: <CardGiftcardIcon sx={iconStyle('#9C27B0')} /> },
      ],
    },
    {
      title: "Recursos para Grandes Empresas",
      items: [
        { name: "Soluciones Empresariales", link: "/soluciones-empresariales", icon: <BusinessIcon sx={iconStyle('#00BCD4')} /> },
        { name: "Análisis de Datos Avanzado", link: "/analisis-datos", icon: <LinkIcon sx={iconStyle('#FF4081')} /> },
        { name: "Cursos de Estrategia Empresarial", link: "/cursos-estrategia", icon: <SchoolIcon sx={iconStyle('#3F51B5')} /> },
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
        marginLeft: 0, // Alineado a la izquierda
      }}
    >
      <Grid container spacing={0} sx={{ justifyContent: "space-between" }}> {/* Agregar justifyContent: "space-between" */}
        {resources.map((resourceCategory, categoryIndex) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={categoryIndex}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between"
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                color: "#333",
                marginBottom: "16px",
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
              {/* Mostrar recursos basados en el estado de "showAll" en dispositivos móviles */}
              {isMobile && !showAll ? (
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
                      }}
                    >
                      {resourceCategory.items[0].name}
                    </Typography>
                  </Box>
                </Link>
              ) : (
                // Si no es móvil o si "showAll" es true, mostrar todos los recursos
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
              {/* En móviles, mostrar el botón para ver más recursos */}
              {isMobile && !showAll && (
                <Box
                  sx={{
                    marginTop: "8px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#007BFF",
                      cursor: "pointer",
                    }}
                    onClick={() => setShowAll(true)}
                  >
                    Ver todos los recursos
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SubmenuRecursos;
