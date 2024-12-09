import React, { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  IconButton,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import EleganteBoton from "../botones/agendaUnaConsulta";
import BotonContactar from "../botones/contactarAhora";
import SubmenuBlogServiciosMovile from "./subNav/movil/servicios"
import SubmenuRecursosMovil from "./subNav/movil/recursos"
import SectoresYDepartamentos from "./subNav/movil/sectores"
import SubmenuBlogSolucionesMovile from "./subNav/movil/soluciones"

// Componentes de contenido
const ServiciosContenido = () => <Box p={2}>Contenido de Servicios</Box>;
const SolucionesContenido = () => <Box p={2}>Contenido de Soluciones</Box>;
const SectoresContenido = () => <Box p={2}>Contenido de Sectores</Box>;
const RecursosContenido = () => <Box p={2}>Contenido de Recursos</Box>;

const MenuDeNavegacionMobile = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const menuItems = [
    { label: "Sectores", component: <SectoresYDepartamentos /> },
    { label: "Soluciones", component: <SubmenuBlogSolucionesMovile /> },
    { label: "Servicios", component: <SubmenuBlogServiciosMovile /> },
    { label: "Recursos", component: <SubmenuRecursosMovil /> },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleAccordionChange = (index) =>
    setExpanded(expanded === index ? null : index);

  const closeMenuOnBackgroundClick = () => {
    setIsMobileMenuOpen(false);
    setExpanded(null);
  };

  return (
    <Box>
      {/* Barra de navegación */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "65px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "0px 20px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        {isMobile && (
          <MenuIcon
            onClick={toggleMobileMenu}
            sx={{ fontSize: "25px", cursor: "pointer" }}
          />
        )}

        <Box
          component="img"
          src="/images/logo-hitpoly.png"
          alt="Logo"
          sx={{
            marginLeft: "15px",
            height: "40px",
            width: "auto",
            cursor: "pointer",
          }}
        />

        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2 }}>
            <EleganteBoton />
            <BotonContactar />
          </Box>
        )}
      </Box>

      {/* Menú móvil */}
      {isMobileMenuOpen && isMobile && (
        <Box
          sx={{
            position: "fixed",
            marginTop: "61px",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#fff", // Fondo oscuro
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Centrar contenido horizontalmente
            zIndex: 9999,
            color: "#fff", // Texto blanco
          }}
          onClick={closeMenuOnBackgroundClick} // Cerrar menú al hacer clic en el fondo
        >
          <IconButton
            onClick={(e) => {
              e.stopPropagation(); // Evitar cerrar el menú al hacer clic en el botón
              toggleMobileMenu();
            }}
            sx={{
              position: "relative",
              alignSelf: "flex-end",
              color: "#211E26",
              fontSize: "30px",
              marginBottom: "20px",
              right: "5%",
            }}
          >
            <CloseIcon />
          </IconButton>

          {menuItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: "90%",
                marginBottom: "10px",
              }}
            >
              <Box
                sx={{
                  padding: "10px 20px",
                  borderBottom: "1px solid #eee",
                  cursor: "pointer",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  textAlign: "center",
                  transition: "background-color 0.3s",
                  color: "#333", // Texto negro dentro del submenú
                }}
                onClick={(e) => {
                  e.stopPropagation(); // Evitar cerrar el menú al hacer clic en el submenú
                  handleAccordionChange(index);
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {item.label}
                </Typography>
              </Box>
              <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                <Box
                  sx={{
                    padding: "10px 20px",
                    backgroundColor: "#f5f5f5",
                    textAlign: "center", // Centrar texto dentro del contenido
                  }}
                >
                  {item.component}
                </Box>
              </Collapse>
            </Box>
          ))}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              marginTop: "20px",
              width: "100%",
              alignItems: "center", // Centrar botones
              justifyContent: "center",
            }}
          >
            {/* Evitar que los botones cierren el menú */}
            <Box
              onClick={(e) => e.stopPropagation()} // Evitar cerrar el menú al hacer clic
              sx={{ width: "100%", display: "flex", justifyContent: "center", }}
            >
              <EleganteBoton />
            </Box>
            <Box
              onClick={(e) => e.stopPropagation()} // Evitar cerrar el menú al hacer clic
              sx={{ width: "100%", display: "flex", justifyContent: "center", }}
            >
              <BotonContactar />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MenuDeNavegacionMobile;
