import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import WorkIcon from "@mui/icons-material/Work";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupsIcon from "@mui/icons-material/Groups";

// Función para aplicar los colores a los íconos
const iconStyle = (color) => ({
  color: color,
});

const SubmenuSoluciones = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const soluciones = [
    {
      title: "Soluciones para Marcas y Empresas",
      items: [
        {
          name: "Crecimiento Digital",
          link: "/crecimiento-digital",
          icon: <TrendingUpIcon sx={iconStyle("#FF5722")} />,
          subtitle:
            "Impulsa tu marca a través de estrategias digitales que maximizan tu visibilidad y retorno de inversión.",
        },
        {
          name: "Herramientas Útiles",
          link: "/herramientas-utiles",
          icon: <InsertDriveFileIcon sx={iconStyle("#2196F3")} />,
          subtitle:
            "Accede a herramientas digitales que optimizan tu productividad y mejoran la eficiencia en tu negocio.",
        },
      ],
    },
    {
      title: "Soluciones para Grandes Empresas",
      items: [
        {
          name: "Auditorías de Publicidad",
          link: "/auditorias-publicidad",
          icon: <AssessmentIcon sx={iconStyle("#4CAF50")} />,
          subtitle:
            "Realiza auditorías exhaustivas para mejorar tus campañas publicitarias y optimizar tu presupuesto.",
        },
        {
          name: "Análisis de Datos",
          link: "/analisis-datos",
          icon: <InsertDriveFileIcon sx={iconStyle("#FFC107")} />,
          subtitle:
            "Obtén insights clave a partir de los datos, mejorando las decisiones estratégicas para tu empresa.",
        },
        {
          name: "Asociaciones",
          link: "/asociaciones",
          icon: <GroupsIcon sx={iconStyle("#9C27B0")} />,
          subtitle:
            "Descubre nuevas oportunidades de asociaciones que permitirán a tu empresa crecer de manera más eficiente.",
        },
      ],
    },
    {
      title: "Soluciones para Profesionales",
      items: [
        {
          name: "Cursos en Línea",
          link: "/cursos-en-linea",
          icon: <SchoolIcon sx={iconStyle("#FFEB3B")} />,
          subtitle:
            "Accede a una amplia oferta de cursos diseñados para mejorar tus habilidades profesionales.",
        },
        {
          name: "Recursos Destacados",
          link: "/recursos-destacados",
          icon: <StarIcon sx={iconStyle("#FF9800")} />,
          subtitle:
            "Obtén acceso a recursos clave que te ayudarán a avanzar en tu carrera y alcanzar tus objetivos.",
        },
        {
          name: "Oportunidades",
          link: "/oportunidades",
          icon: <WorkIcon sx={iconStyle("#9C27B0")} />,
          subtitle:
            "Descubre oportunidades para crecer profesionalmente y colaborar con otros expertos del sector.",
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "100%", // Se ajusta a todo el ancho disponible
        marginLeft: "0", // Alineado a la izquierda
        marginRight: "auto", // Asegura que no se desborde hacia la derecha
      }}
    >
      <Grid container spacing={3} sx={{ display: "flex",}}>
        {soluciones.map((solucionCategory, categoryIndex) => (
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
            }}
          >
            <Typography
              variant="h6"
              sx={{
                width: "70%",
                fontWeight: 500,
                color: "#333",
                marginBottom: "16px",
              }}
            >
              {solucionCategory.title}
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
                  {solucionCategory.items[0].icon}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#555",
                    }}
                  >
                    {solucionCategory.items[0].name}
                  </Typography>
                </Box>
              ) : (
                // Si no es móvil, mostrar todos los recursos
                solucionCategory.items.map((item, itemIndex) => (
                  <Box
                    key={itemIndex}
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
                ))
              )}

              {isMobile && (
                <Box
                  sx={{
                    marginTop: "8px",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2" sx={{ color: "#007BFF" }}>
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

export default SubmenuSoluciones;
