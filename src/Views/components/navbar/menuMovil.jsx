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
import SubmenuBlogServiciosMovile from "./subNav/movil/servicios";
import SubmenuRecursosMovil from "./subNav/movil/recursos";
import SectoresYDepartamentos from "./subNav/movil/sectores";
import SubmenuBlogSolucionesMovile from "./subNav/movil/soluciones";

const MenuDeNavegacionMobile = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const menuItems = [
    { label: "Servicios", component: <SubmenuBlogServiciosMovile /> },
    { label: "Sectores", component: <SectoresYDepartamentos /> },
    { label: "Soluciones", component: <SubmenuBlogSolucionesMovile /> },
    { label: "Recursos", component: <SubmenuRecursosMovil /> },
  ];

  // Función para alternar el menú móvil
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  
  // Función para manejar el cambio de los elementos del acordeón
  const handleAccordionChange = (index, itemRef) => {
    setExpanded(expanded === index ? null : index);

    // Desplazar el elemento a la primera posición con un desplazamiento suave
    itemRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start", // Esto asegura que el ítem se desplace a la parte superior
    });
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
            width: "100%",
            height: "calc(100vh - 61px)", // Deja espacio para la barra de navegación
            backgroundColor: "#fff", // Fondo blanco
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 9999,
            overflowY: "auto", // Permite el desplazamiento vertical
          }}
        >
          <IconButton
            onClick={toggleMobileMenu} // Cerrar solo cuando se haga clic en el ícono de la X
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

          {/* Contenedor desplazable para el contenido */}
          <Box
            sx={{
              width: "100%",
              overflowY: "auto", // Permite el desplazamiento dentro del contenedor
              maxHeight: "calc(100vh - 100px)", // Limita la altura para que el contenido sea desplazable
            }}
          >
            {menuItems.map((item, index) => {
              const itemRef = React.createRef(); // Crear una referencia para cada item

              return (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    marginBottom: "10px",
                  }}
                  ref={itemRef} // Asignar la referencia al ítem
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
                      color: "#333",
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // Evitar que el clic en el item cierre el menú
                      handleAccordionChange(index, itemRef); // Llamar con la referencia
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {item.label}
                    </Typography>
                  </Box>
                  <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                    <Box
                      sx={{
                        padding: "10px 10px",
                        backgroundColor: "#f5f5f5",
                        textAlign: "center", // Centrar texto dentro del contenido
                      }}
                    >
                      {item.component}
                    </Box>
                  </Collapse>
                </Box>
              );
            })}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              marginTop: "20px",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Evitar que los botones cierren el menú */}
            <Box
              onClick={(e) => e.stopPropagation()} // Evitar cerrar el menú al hacer clic
              sx={{ width: "100%", height: "40px", display: "flex", justifyContent: "center" }}
            >
              <EleganteBoton />
            </Box>
            <Box
              onClick={(e) => e.stopPropagation()} // Evitar cerrar el menú al hacer clic
              sx={{ width: "100%", height: "40px", display: "flex", justifyContent: "center", marginBottom: "10px" }}
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
