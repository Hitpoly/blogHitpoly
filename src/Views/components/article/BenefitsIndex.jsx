import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  Card,
  Grid,
} from "@mui/material";

const BenefitsIndex = ({
  title = "Beneficios clave", // Título predeterminado
  benefits = [], // Lista de beneficios
  imageSrc = "", // Fuente de la imagen
  imageAlt = "Imagen representativa", // Texto alternativo de la imagen
  containerStyles = {}, // Estilos personalizados del contenedor
  cardStyles = {}, // Estilos personalizados de la tarjeta
  listStyles = {}, // Estilos personalizados de la lista
}) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "25vw",
        ...containerStyles, // Permitir estilos personalizados
      }}
    >
      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          padding: 3,
          borderRadius: 2,
          width: "70%",
          boxShadow: 1, // Agrega una sombra ligera
          ...cardStyles, // Permitir estilos personalizados
        }}
      >
        {/* Título flotante con imagen opcional */}
        <Card sx={{ marginBottom: 3, padding: 1 }}>
          <Grid container alignItems="center">
            {imageSrc && (
              <Grid item xs={12} md={3}>
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  style={{
                    width: "100%",
                    maxHeight: "10vw",
                    objectFit: "contain",
                  }}
                />
              </Grid>
            )}
            <Grid item xs={12} md={imageSrc ? 6 : 12}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  textAlign: imageSrc ? "start" : "center",
                }}
              >
                {title}
              </Typography>
            </Grid>
          </Grid>
        </Card>

        {/* Lista de beneficios */}
        <List sx={{ ...listStyles }}>
          {benefits.length > 0 ? (
            benefits.map((benefit, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText
                  primary={`${index + 1}. ${benefit}`}
                  sx={{
                    paddingTop: "10px",
                    textAlign: "left",
                  }}
                />
              </ListItem>
            ))
          ) : (
            <ListItem disablePadding>
              <ListItemText
                primary="No hay beneficios disponibles."
                sx={{
                  textAlign: "center",
                  color: "gray",
                }}
              />
            </ListItem>
          )}
        </List>
      </Box>
    </Container>
  );
};

export default BenefitsIndex;
