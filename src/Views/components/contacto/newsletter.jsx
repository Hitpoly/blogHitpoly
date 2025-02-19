import React from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  CardMedia,
} from "@mui/material";

function CaptadorCorreo({ image, title, description, email, setEmail, onSubmit }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        alignItems: "center",
        backgroundColor: "#f4f4f4",
        borderRadius: { xs: "0px 15px 15px 0px", md: "15px" },
        padding: { xs: "0px 20px", md: "0px 30px" },
        paddingTop: { xs: "10px", md: "30px" },
        marginTop: { xs: "20px", md: "80px" },
      }}
    >
      {/* Imagen a la izquierda */}
      <Grid item xs={12} md={3}>
        <CardMedia
          component="img"
          image={image}
          alt="Imagen relacionada"
          sx={{
            width: "220px",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Grid>

      {/* Contenido a la derecha */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: { xs: "20px", md: "50px 50px" },
          paddingBottom: { md: "20px" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Título */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "400",
              color: "#333",
              textAlign: "center",
              fontSize: "1.2rem",
            }}
          >
            {title}
          </Typography>

          {/* Captador de correos */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Cambia la dirección según el tamaño de pantalla
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 2, md: 1 }, // Espaciado dinámico
              padding: "10px 0px",
              width: "100%",
            }}
          >
            <TextField
              label="Ingresa tu correo"
              variant="outlined"
              fullWidth
              size="small"
              value={email} // Vincula el valor con el estado
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado con el valor del input
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                whiteSpace: "nowrap",
                borderRadius: "25px",
                padding: "7px 30px",
                backgroundColor: "#F21C63",
                width: { xs: "100%", md: "auto" }, // Botón ocupa toda la anchura en móviles
              }}
              onClick={onSubmit} // Llama a la función onSubmit pasada como propiedad
            >
              Enviar
            </Button>
          </Box>

          {/* Descripción */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              padding: "10px 10px",
              lineHeight: 1.6,
              alignItems: "center",
              fontSize: "0.8rem",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CaptadorCorreo;
