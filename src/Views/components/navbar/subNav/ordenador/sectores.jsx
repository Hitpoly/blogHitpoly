import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import HotelIcon from "@mui/icons-material/Hotel";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MarketingIcon from "@mui/icons-material/TrendingUp";
import SalesIcon from "@mui/icons-material/AttachMoney";
import PeopleIcon from "@mui/icons-material/People";
import CodeIcon from "@mui/icons-material/Code";

const SectoresYDepartamentos = () => {
  const sectores = [
    {
      name: "Tecnología y Software",
      icon: <BusinessCenterIcon sx={{ color: "#00B0FF" }} />,
    },
    {
      name: "Salud y Bienestar",
      icon: <HealthAndSafetyIcon sx={{ color: "#4CAF50" }} />,
    },
    {
      name: "E-commerce y Retail",
      icon: <ShoppingCartIcon sx={{ color: "#FF9800" }} />,
    },
    {
      name: "Educación y Formación",
      icon: <SchoolIcon sx={{ color: "#FFEB3B" }} />,
    },
    {
      name: "Inmobiliario",
      icon: <HomeIcon sx={{ color: "#8BC34A" }} />,
    },
    {
      name: "Turismo y Viajes",
      icon: <HotelIcon sx={{ color: "#FFC107" }} />,
    },
    {
      name: "Restauración y Alimentos",
      icon: <RestaurantIcon sx={{ color: "#FF5722" }} />,
    },
    {
      name: "Consultoría y Servicios Profesionales",
      icon: <BusinessCenterIcon sx={{ color: "#9C27B0" }} />,
    },
  ];

  const departamentos = [
    {
      name: "Marketing",
      icon: <MarketingIcon sx={{ color: "#FF5722" }} />,
    },
    {
      name: "Ventas",
      icon: <SalesIcon sx={{ color: "#2196F3" }} />,
    },
    {
      name: "Recursos Humanos",
      icon: <PeopleIcon sx={{ color: "#4CAF50" }} />,
    },
    {
      name: "Tecnología",
      icon: <CodeIcon sx={{ color: "#9C27B0" }} />,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "1000px", // Mantener un tamaño máximo para el contenedor
        width: "100%", // Ocupa el 100% del ancho disponible
      }}
    >
      <Grid container spacing={4} justifyContent="flex-start">
        {/* Sectores */}
        <Grid
          item
          xs={12} sm={6} md={5} // Hacemos que ocupe menos espacio que la siguiente sección
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Alineación a la izquierda
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 500, color: "#333", marginBottom: "16px" }}
          >
            Sectores
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {sectores.map((sector, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px",
                  borderRadius: "4px",
                  transition: "background-color 0.3s ease",
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                {sector.icon}
                <Typography variant="body2" sx={{ color: "#555" }}>
                  {sector.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Departamentos */}
        <Grid
          item
          xs={12} sm={6} md={5} // Hacemos que ocupe un espacio similar al anterior
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // Alineación a la izquierda
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 500, color: "#333", marginBottom: "16px" }}
          >
            Departamentos
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {departamentos.map((departamento, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px",
                  borderRadius: "4px",
                  transition: "background-color 0.3s ease",
                  "&:hover": { backgroundColor: "#f5f5f5" },
                }}
              >
                {departamento.icon}
                <Typography variant="body2" sx={{ color: "#555" }}>
                  {departamento.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectoresYDepartamentos;
