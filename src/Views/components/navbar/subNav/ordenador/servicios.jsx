import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import FacebookIcon from "@mui/icons-material/Facebook"; 
import PeopleIcon from "@mui/icons-material/People"; 
import ContentPasteIcon from "@mui/icons-material/ContentPaste"; 
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import WebIcon from "@mui/icons-material/Web";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ApiIcon from "@mui/icons-material/Api";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArticleIcon from "@mui/icons-material/Article";
import LinkIcon from "@mui/icons-material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BarChartIcon from "@mui/icons-material/BarChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import AssessmentIcon from "@mui/icons-material/Assessment";
import InsightsIcon from "@mui/icons-material/Insights";
import { Link } from "react-router-dom";

// Función para aplicar los colores a los íconos
const iconStyle = (color) => ({
  color: color,
});

const SubmenuBlogServicios = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const services = [
    {
      title: "Marketing Digital",
      items: [
        { name: "Google Ads", link: "/google-ads", icon: <CampaignIcon sx={iconStyle('#4285F4')} /> },
        { name: "Meta Ads", link: "/meta-ads", icon: <FacebookIcon sx={iconStyle('#1877F2')} /> },
        {
          name: "Gestión de redes sociales",
          link: "/gestion-redes",
          icon: <PeopleIcon sx={iconStyle('#34B7F1')} />,
        },
        {
          name: "Marketing de contenidos",
          link: "/marketing-contenidos",
          icon: <ContentPasteIcon sx={iconStyle('#DB4437')} />,
        },
      ],
    },
    {
      title: "Desarrollo de Software",
      items: [
        {
          name: "Aplicaciones móviles",
          link: "/apps-moviles",
          icon: <SmartphoneIcon sx={iconStyle('#F4B400')} />,
        },
        {
          name: "Sistemas personalizados",
          link: "/sistemas",
          icon: <WebIcon sx={iconStyle('#202124')} />,
        },
        { name: "E-commerce", link: "/ecommerce", icon: <ShoppingCartIcon sx={iconStyle('#00A9E0')} /> },
        {
          name: "APIs e integraciones",
          link: "/apis",
          icon: <ApiIcon sx={iconStyle('#0F9D58')} />,
        },
      ],
    },
    {
      title: "SEO y Posicionamiento",
      items: [
        { name: "SEO técnico", link: "/seo-tecnico", icon: <TrendingUpIcon sx={iconStyle('#FF9800')} /> },
        {
          name: "Optimización de contenido",
          link: "/optimizacion",
          icon: <ArticleIcon sx={iconStyle('#34A853')} />,
        },
        { name: "Link Building", link: "/link-building", icon: <LinkIcon sx={iconStyle('#3B82F6')} /> },
        { name: "SEO local", link: "/seo-local", icon: <LocationOnIcon sx={iconStyle('#FFB300')} /> },
      ],
    },
    {
      title: "Análisis de Datos",
      items: [
        {
          name: "Dashboards personalizados",
          link: "/dashboards",
          icon: <BarChartIcon sx={iconStyle('#424242')} />,
        },
        {
          name: "Análisis predictivo",
          link: "/predictivo",
          icon: <TimelineIcon sx={iconStyle('#F44336')} />,
        },
        { name: "KPIs y métricas", link: "/kpis", icon: <AssessmentIcon sx={iconStyle('#9C27B0')} /> },
        {
          name: "Estrategias basadas en datos",
          link: "/estrategias",
          icon: <InsightsIcon sx={iconStyle('#0D47A1')} />,
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
      <Grid container spacing={3}>
        {services.map((serviceCategory, categoryIndex) => (
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
                fontWeight: 500,
                color: "#333",
                marginBottom: "16px",
              }}
            >
              {serviceCategory.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {/* Mostrar solo el primer servicio si es móvil */}
              {isMobile ? (
                <Link
                  key={0}
                  to={serviceCategory.items[0].link}
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
                    {serviceCategory.items[0].icon}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#555",
                      }}
                    >
                      {serviceCategory.items[0].name}
                    </Typography>
                  </Box>
                </Link>
              ) : (
                // Si no es móvil, mostrar todos los servicios
                serviceCategory.items.map((item, itemIndex) => (
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
                    Ver todos los servicios
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

export default SubmenuBlogServicios;
