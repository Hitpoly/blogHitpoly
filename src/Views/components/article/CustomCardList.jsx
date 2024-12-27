import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const CustomCardList = ({
  logoSrc = "/images/logo-hitpoly.png", // Ruta del logo
  logoAlt = "Hitpoly Logo", // Texto alternativo del logo
  cards = [], // Lista de contenidos para las tarjetas
  containerStyles = {}, // Estilos personalizados para el contenedor
  cardStyles = {}, // Estilos personalizados para las tarjetas
  cardTextStyles = {}, // Estilos personalizados para el texto dentro de las tarjetas
}) => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: "#0B8DB5",
          color: "#ffffff",
          padding: 5,
          borderRadius: 2,
          marginLeft: "2vw",
          textAlign: "center",
          ...containerStyles, // Permitir personalización del contenedor
        }}
      >
        <Grid container direction="column" alignItems="center" spacing={4}>
          {/* Logotipo */}
          <Grid item>
            <Box
              component="img"
              src={logoSrc}
              alt={logoAlt}
              sx={{
                width: "260px",
                marginBottom: 4,
              }}
            />
          </Grid>

          {/* Tarjetas */}
          <Grid item xs={12} md={9} container direction="column" spacing={3}>
            {cards.map((content, index) => (
              <Grid item key={index}>
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 3,
                    padding: 3,
                    boxShadow: 2,
                    textAlign: "justify",
                    ...cardStyles, // Permitir personalización de las tarjetas
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      color: "#333333",
                      lineHeight: "1.5",
                      ...cardTextStyles, // Personalización del texto de las tarjetas
                    }}
                  >
                    {content}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CustomCardList;
