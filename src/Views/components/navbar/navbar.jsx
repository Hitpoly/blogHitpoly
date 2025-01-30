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
      {isDesktop && (
        <Box
          sx={{
            position: "fixed", // Fija el menú en la parte superior de la pantalla
            width: "100%", // Asegura que ocupe todo el ancho de la pantalla
            zIndex: 1000, // Asegura que el menú se quede encima de otros elementos
          }}
        >
          <MenuDeNavegacionPc />
        </Box>
      )}
    </Box>
  );
};

export default MenuDeNavegacion;
