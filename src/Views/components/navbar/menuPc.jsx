import React, { useState, useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import EleganteBoton from "../botones/agendaUnaConsulta";
import BotonContactar from "../botones/contactarAhora";

const Servicios = () => <Box p={2}>Contenido de Servicios</Box>;
const Soluciones = () => <Box p={2}>Contenido de Soluciones</Box>;
const Sectores = () => <Box p={2}>Contenido de Sectores</Box>;
const Recursos = () => <Box p={2}>Contenido de Recursos</Box>;

const MenuDeNavegacionPc = () => {
  const [hoveredItem, setHoveredItem] = useState(null); // Elemento seleccionado
  const timeoutRef = useRef(null); // Referencia para gestionar el retraso

  const menuItems = [
    { label: "Servicios", component: <Servicios /> },
    { label: "Soluciones", component: <Soluciones /> },
    { label: "Sectores", component: <Sectores /> },
    { label: "Recursos", component: <Recursos /> },
  ];

  // Manejo del hover con retraso
  const handleMouseEnter = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 200); // Retraso de 200ms
  };

  return (
    <Box>
      {/* Barra de navegación */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          padding: "10px 20px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        {/* Navegación de escritorio */}
        <Box sx={{ marginLeft: "30px", display: "flex", gap: 3 }}>
          {menuItems.map((item, index) => (
            <Box
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              sx={{
                position: "relative",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: hoveredItem === index ? "normal" : "normal",
                  color: hoveredItem === index ? "#1976D2" : "#333",
                  transition: "color 0.3s ease",
                }}
              >
                {item.label}
              </Typography>
              {hoveredItem === index && (
                <Box
                  sx={{
                    position: "fixed",
                    top: "60px",
                    left: 0,
                    width: "100vw",
                    backgroundColor: "#fff",
                    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                    padding: "20px",
                    zIndex: 1000,
                  }}
                  onMouseEnter={() => handleMouseEnter(index)} // Evita que desaparezca al entrar
                  onMouseLeave={handleMouseLeave} // Desaparece al salir
                >
                  {item.component}
                </Box>
              )}
            </Box>
          ))}
        </Box>

        {/* Logo */}
        <Box
          component="img"
          src="/images/logo-hitpoly.png"
          alt="Logo"
          sx={{
            height: "40px",
            width: "auto",
            cursor: "pointer",
          }}
        />

        {/* Contenedor para los botones de escritorio */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <EleganteBoton />
          <BotonContactar />
        </Box>
      </Box>
    </Box>
  );
};

export default MenuDeNavegacionPc;
