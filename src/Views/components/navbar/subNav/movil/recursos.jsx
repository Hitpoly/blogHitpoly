import React from "react";
import { Box, Typography } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description"; // Guías Prácticas
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile"; // Plantillas Estratégicas
import CheckBoxIcon from "@mui/icons-material/CheckBox"; // Checklists
import LiveTvIcon from "@mui/icons-material/LiveTv"; // Webinars
import PersonPinIcon from "@mui/icons-material/PersonPin"; // Asesoría Personalizada
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined"; // Cursos Interactivos
import Desplazable from "./desplazable/elementoDesplazable"; // Importamos el componente Desplegable

// Datos de los servicios para marcas y empresas
const marcasEmpresas = [
  {
    name: "Guías Prácticas",
    icon: <DescriptionIcon sx={{ color: "#00B0FF" }} />, // Ícono para Guías Prácticas
    link: "/guias-practicas", // Enlace correspondiente
  },
  {
    name: "Plantillas Estratégicas",
    icon: <InsertDriveFileIcon sx={{ color: "#FF9800" }} />, // Ícono para Plantillas Estratégicas
    link: "/plantillas-estrategicas", // Enlace correspondiente
  },
  {
    name: "Checklists",
    icon: <CheckBoxIcon sx={{ color: "#4CAF50" }} />, // Ícono para Checklists
    link: "/checklists", // Enlace correspondiente
  },
];

// Datos de los servicios para profesionales
const profesionales = [
  {
    name: "Webinars Exclusivos",
    icon: <LiveTvIcon sx={{ color: "#FFC107" }} />, // Ícono para Webinars Exclusivos
    link: "/webinars-exclusivos", // Enlace correspondiente
  },
  {
    name: "Asesoría Personalizada",
    icon: <PersonPinIcon sx={{ color: "#FF5722" }} />, // Ícono para Asesoría Personalizada
    link: "/asesoria-personalizada", // Enlace correspondiente
  },
  {
    name: "Cursos Interactivos",
    icon: <SchoolOutlinedIcon sx={{ color: "#FFEB3B" }} />, // Ícono para Cursos Interactivos
    link: "/cursos-interactivos", // Enlace correspondiente
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
          Recursos
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* Fila de Servicios para Marcas y Empresas */}
          <Desplazable titulo="Servicios para Marcas y Empresas" data={marcasEmpresas} />

          {/* Fila de Servicios para Profesionales */}
          <Desplazable titulo="Servicios para Profesionales" data={profesionales} />
        </Box>
      </Box>
    </Box>
  );
};

export default SubmenuBlogServiciosMovile;
