import React from "react";
import { Box, useMediaQuery } from "@mui/material";

// Importa los componentes que ya tienes preparados
import MenuDeNavegacionMobile from "./menuMovil"; // Componente de menú para móviles
import MenuDeNavegacionPc from "./menuPc"; // Componente de menú para escritorio

const MenuDeNavegacion = () => {
  const isMobile = useMediaQuery("(max-width: 960px)"); // Verifica si es móvil o pantalla pequeña (xs, sm)
  const isDesktop = useMediaQuery("(min-width: 960px)"); // Verifica si es escritorio (md en adelante)

  return (
    <Box>
      {/* Menú para móviles */}
      {isMobile && <MenuDeNavegacionMobile />}

      {/* Menú para escritorio */}
      {isDesktop && <MenuDeNavegacionPc />}
    </Box>
  );
};

export default MenuDeNavegacion;
