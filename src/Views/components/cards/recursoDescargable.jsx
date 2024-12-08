import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

const FreeRecursoCard = () => {
  return (
    <Card
      sx={{
        color: "#FFFFFF",
        borderRadius: "15px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
      }}
    >
      <CardContent sx={{ marginTop: "0px", marginLeft: "20px", marginRight: "20px" }}>
        <Typography variant="h6" sx={{ color: "#211E26", marginBottom: "10px" }}>
          Plantillas Gratuitas para Crear Estrategias de Ventas
        </Typography>
        <Typography variant="body2" sx={{ color: "#A0A0A0", marginBottom: "20px", fontSize: "1rem" }}>
          Descarga estas plantillas para diseñar un plan de ventas efectivo y aumentar tu tasa de conversión.
        </Typography>

        {/* Imagen añadida */}
        <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <img
            src="https://via.placeholder.com/200x100"
            alt="Estrategia de Ventas"
            style={{
              width: "100%",
              borderRadius: "10px",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </Box>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <Button
          variant="contained"
          sx={{
            width: "80%",
            backgroundColor: "#F21C63",
            color: "white",
            borderRadius: "30px",
            fontWeight: "bold",
            padding: "10px 20px",
            "&:hover": {
              backgroundColor: "#bf0a46",
            },
          }}
        >
          Descargar Ahora
        </Button>
      </Box>
    </Card>
  );
};

export default FreeRecursoCard;
