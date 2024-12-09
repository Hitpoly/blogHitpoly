import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import HotelIcon from "@mui/icons-material/Hotel";
import RestaurantIcon from "@mui/icons-material/Restaurant";

// Datos de los sectores
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
];

// Datos de los departamentos (ejemplo)
const departamentos = [
  { name: "Marketing" },
  { name: "Ventas" },
  { name: "Recursos Humanos" },
  { name: "Finanzas" },
  { name: "IT" },
  { name: "Atención al Cliente" },
  { name: "Logística" },
];

const SectoresYDepartamentos = () => {
  const [showAllSectores, setShowAllSectores] = useState(false);

  // Mostrar solo los primeros 5 sectores
  const sectoresToDisplay = showAllSectores ? sectores : sectores.slice(0, 5);

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "1000px",
        width: "100%",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: 500, color: "#333", marginBottom: "16px" }}
      >
        Sectores y Departamentos
      </Typography>

      <Box sx={{ display: "flex", gap: "32px" }}>
        {/* Columna de Sectores */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "16px",
            }}
          >
            Sectores
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {sectoresToDisplay.map((sector, index) => (
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
                  margin: "0", // Asegura que no haya márgenes adicionales
                }}
              >
                {sector.icon}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                    textAlign: "left",
                    textDecoration: "none", // Elimina el subrayado
                    cursor: "pointer", // Cambia el cursor al hacer hover
                    "&:hover": {
                      backgroundColor: "transparent", // Evita cualquier cambio visual
                    },
                  }}
                >
                  {sector.name}
                </Typography>
              </Box>
            ))}
          </Box>

          <Button
            onClick={() => setShowAllSectores(!showAllSectores)}
            sx={{
              marginTop: "16px",
              color: "#00B0FF",
              textTransform: "none",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            {showAllSectores ? "Ver menos sectores" : "Ver todos los sectores"}
          </Button>
        </Box>

        {/* Columna de Departamentos */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "16px",
            }}
          >
            Departamentos
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {departamentos.map((departamento, index) => (
              <Box
                key={index}
                sx={{
                  padding: "8px",
                  borderRadius: "4px",
                  backgroundColor: "#f5f5f5",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  "&:hover": { backgroundColor: "#e0e0e0" },
                  margin: "0", // Asegura que no haya márgenes adicionales
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#555",
                    textAlign: "left",
                    textDecoration: "none", // Elimina el subrayado
                    cursor: "pointer", // Cambia el cursor al hacer hover
                  }}
                >
                  {departamento.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectoresYDepartamentos;
