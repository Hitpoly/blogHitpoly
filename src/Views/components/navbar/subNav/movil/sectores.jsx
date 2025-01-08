import React from "react";
import { Box, Typography } from "@mui/material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import StoreIcon from "@mui/icons-material/Store";
import SchoolIcon from "@mui/icons-material/School";
import ApartmentIcon from "@mui/icons-material/Apartment";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CampaignIcon from "@mui/icons-material/Campaign";
import SellIcon from "@mui/icons-material/Sell";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ComputerIcon from "@mui/icons-material/Computer";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import Desplazable from "./desplazable/elementoDesplazable"; // Importamos el componente Desplegable

// Datos de los sectores con íconos y enlaces
const sectores = [
  {
    name: "Tecnología y Software",
    icon: <LaptopMacIcon sx={{ color: "#00B0FF" }} />,
    link: "/tecnologia-y-software", // Enlace correspondiente
  },
  {
    name: "Salud y Bienestar",
    icon: <LocalHospitalIcon sx={{ color: "#4CAF50" }} />,
    link: "/salud-y-bienestar", // Enlace correspondiente
  },
  {
    name: "E-commerce y Retail",
    icon: <StoreIcon sx={{ color: "#FF9800" }} />,
    link: "/ecommerce-y-retail", // Enlace correspondiente
  },
  {
    name: "Educación y Formación",
    icon: <SchoolIcon sx={{ color: "#FFEB3B" }} />,
    link: "/educacion-y-formacion", // Enlace correspondiente
  },
  {
    name: "Inmobiliario",
    icon: <ApartmentIcon sx={{ color: "#8BC34A" }} />,
    link: "/inmobiliario", // Enlace correspondiente
  },
  {
    name: "Turismo y Viajes",
    icon: <TravelExploreIcon sx={{ color: "#FFC107" }} />,
    link: "/turismo-y-viajes", // Enlace correspondiente
  },
  {
    name: "Restauración y Alimentos",
    icon: <RestaurantIcon sx={{ color: "#FF5722" }} />,
    link: "/restauracion-y-alimentos", // Enlace correspondiente
  },
];

// Datos de los departamentos con íconos y enlaces
const departamentos = [
  {
    name: "Marketing",
    icon: <CampaignIcon sx={{ color: "#00B0FF" }} />,
    link: "/marketing", // Enlace correspondiente
  },
  {
    name: "Ventas",
    icon: <SellIcon sx={{ color: "#FF9800" }} />,
    link: "/ventas", // Enlace correspondiente
  },
  {
    name: "Recursos Humanos",
    icon: <PeopleIcon sx={{ color: "#4CAF50" }} />,
    link: "/recursos-humanos", // Enlace correspondiente
  },
  {
    name: "Finanzas",
    icon: <AccountBalanceIcon sx={{ color: "#00B0FF" }} />,
    link: "/finanzas", // Enlace correspondiente
  },
  {
    name: "IT",
    icon: <ComputerIcon sx={{ color: "#3B207F" }} />,
    link: "/it", // Enlace correspondiente
  },
  {
    name: "Atención al Cliente",
    icon: <SupportAgentIcon sx={{ color: "#FF5722" }} />,
    link: "/atencion-al-cliente", // Enlace correspondiente
  },
  {
    name: "Logística",
    icon: <MoveToInboxIcon sx={{ color: "#FFC107" }} />,
    link: "/logistica", // Enlace correspondiente
  },
];

const SectoresYDepartamentos = () => {
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
          Sectores y Departamentos
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* Fila de Sectores */}
          <Desplazable titulo="Sectores" data={sectores} />

          {/* Fila de Departamentos */}
          <Desplazable titulo="Departamentos" data={departamentos} />
        </Box>
      </Box>
    </Box>
  );
};

export default SectoresYDepartamentos;
