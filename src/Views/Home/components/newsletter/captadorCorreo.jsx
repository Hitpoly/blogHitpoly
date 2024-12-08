import React from "react";
import CaptadorCorreo from "../../../components/contacto/newsletter";
import { Box, Typography } from "@mui/material";

function Newsletter() {
  return (
    <Box sx={{position: "relative", padding: {xs: "0px 20px", md: "40px 150px", height: "100%"}}}>
      <CaptadorCorreo
        image="/images/contactoNewsletter.png"
        title={
          <Typography variant="h5" sx={{fontSize: "1.2rem"}}>
            Recibe las{" "}
            <span style={{ color: "#F21C63",}}>
              últimas noticias
            </span>{" "}
            de hitpoly en tu bandeja de entrada
          </Typography>
        }
        description="Recibe directamente en tu correo las últimas actualizaciones y recursos exclusivos. Su información se utilizará de acuerdo con la política de privacidad de Datos."
      />
    </Box>
  );
}

export default Newsletter;
