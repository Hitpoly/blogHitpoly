import React from "react";
import { Box, Typography } from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail"; 
import WidgetsIcon from "@mui/icons-material/Widgets"; 
import CodeIcon from "@mui/icons-material/Code";
import WebIcon from "@mui/icons-material/Web";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly"; // Para aplicaciones nativas
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode"; // Para aplicaciones híbridas
import ContactMailIcon from "@mui/icons-material/ContactMail"; // Para CRM

import Desplazable from "./desplazable/elementoDesplazable"; 

// Servicios en el sector de marketing
const marketing = [
  {
    name: "Redes Sociales",
    icon: <CampaignIcon sx={{ color: "#00B0FF" }} />,
    link: "https://hitpoly.com/servicios/redes-sociales", 
  },
  {
    name: "Publicidad Digital",
    icon: <MailIcon sx={{ color: "#FF9800" }} />,
    link: "https://hitpoly.com/servicios/publicidad-digital", 
  },
  {
    name: "Email Marketing",
    icon: <WidgetsIcon sx={{ color: "#FF5722" }} />, 
    link: "https://hitpoly.com/servicios/email-marketing", 
  },
  {
    name: "Inbound Marketing",
    icon: <SchoolIcon sx={{ color: "#FFEB3B" }} />, 
    link: "https://hitpoly.com/servicios/inbound-marketing", 
  },
  {
    name: "Asesoría de Inbound Marketing",
    icon: <PeopleIcon sx={{ color: "#8BC34A" }} />, 
    link: "https://hitpoly.com/servicios/asesoria-inbound", 
  },
];

// Servicios en el sector de desarrollo de software
const desarrollo = [
  {
    name: "Creación de Páginas Web",
    icon: <WebIcon sx={{ color: "#00B0FF" }} />,
    link: "https://hitpoly.com/servicios/desarrollo-software", 
  },
  {
    name: "Páginas de Aterrizaje",
    icon: <MoveToInboxIcon sx={{ color: "#FF9800" }} />,
    link: "https://hitpoly.com/servicios/desarrollo-software", 
  },
  {
    name: "Aplicaciones Nativas",
    icon: <MobileFriendlyIcon sx={{ color: "#4CAF50" }} />, // Cambiado a MobileFriendlyIcon
    link: "https://hitpoly.com/servicios/desarrollo-software", 
  },
  {
    name: "Aplicaciones Híbridas",
    icon: <DeveloperModeIcon sx={{ color: "#FF5722" }} />, // Cambiado a DeveloperModeIcon
    link: "https://hitpoly.com/servicios/desarrollo-software", 
  },
  {
    name: "CRM",
    icon: <ContactMailIcon sx={{ color: "#FFEB3B" }} />, // Cambiado a ContactMailIcon
    link: "https://hitpoly.com/servicios/desarrollo-software", 
  },
  {
    name: "Desarrollo a Medida",
    icon: <CodeIcon sx={{ color: "#8BC34A" }} />,
    link: "https://hitpoly.com/servicios/desarrollo-software", 
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
          Servicios
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* Fila de Sectores */}
          <Desplazable titulo="Servicios de Marketing" data={marketing} />

          {/* Fila de Departamentos */}
          <Desplazable titulo="Servicios de Desarrollo de Software" data={desarrollo} />
        </Box>
      </Box>
    </Box>
  );
};

export default SubmenuBlogServiciosMovile;
