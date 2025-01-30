import React from "react";
import { Box, Typography } from "@mui/material";
import DevicesIcon from "@mui/icons-material/Devices"; // Para "Crecimiento Digital"
import BuildIcon from "@mui/icons-material/Build"; // Para "Herramientas útiles"
import SchoolIcon from "@mui/icons-material/School"; // Para "Cursos en línea"
import WorkIcon from "@mui/icons-material/Work"; // Para "Recursos Destacados"
import EventAvailableIcon from "@mui/icons-material/EventAvailable"; // Para "Oportunidades"
import Desplazable from "./desplazable/elementoDesplazable"; // Importamos el componente Desplegable
// Datos de los sectores con íconos y enlaces
const marcasYEmpresas = [
  {
    name: "Crecimiento Digital",
    icon: <DevicesIcon sx={{ color: "#00B0FF" }} />, // Cambié a DevicesIcon para Crecimiento Digital
    link: "/tecnologia-y-software", // Enlace correspondiente
  },
  {
    name: "Herramientas útiles",
    icon: <BuildIcon sx={{ color: "#4CAF50" }} />, // Cambié a BuildIcon para Herramientas útiles
    link: "/salud-y-bienestar", // Enlace correspondiente
  },
];

// Datos de los departamentos con íconos y enlaces
const profesionales = [
  {
    name: "Cursos en línea",
    icon: <SchoolIcon sx={{ color: "#00B0FF" }} />, // Cambié a SchoolIcon para Cursos en línea
    link: "/marketing", // Enlace correspondiente
  },
  {
    name: "Recursos Destacados",
    icon: <WorkIcon sx={{ color: "#FF9800" }} />, // Cambié a WorkIcon para Recursos Destacados
    link: "/ventas", // Enlace correspondiente
  },
  {
    name: "Oportunidades",
    icon: <EventAvailableIcon sx={{ color: "#4CAF50" }} />, // Cambié a EventAvailableIcon para Oportunidades
    link: "/recursos-humanos", // Enlace correspondiente
  },
];

const SubmenuBlogServiciosMovile = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <Box sx={{ padding: "20px" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 500, color: "#333", marginBottom: "16px" }}
        >
          Soluciones
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* Fila de Sectores */}
          <Desplazable titulo="Para marcas y empresas" data={marcasYEmpresas} />

          {/* Fila de Departamentos */}
          <Desplazable titulo="Para profesionales" data={profesionales} />
        </Box>
      </Box>
    </Box>
  );
};

export default SubmenuBlogServiciosMovile;
