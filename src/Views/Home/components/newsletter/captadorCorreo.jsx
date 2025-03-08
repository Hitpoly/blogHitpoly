import React, { useState } from "react";
import CaptadorCorreo from "../../../components/contacto/newsletter";
import { Box, Typography } from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {    
    if (!email) {
      Swal.fire("Error", "Por favor, ingrese un correo válido", "error");
      return;
    }

    try {
      const response = await fetch("https://apinewblog.hitpoly.com/ajax/emailController.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ funcion: "email", email }),
      });

      const data = await response.json();

      if (data.status === "success") {
        Swal.fire("¡Tu email fue enviado con éxito!", "En breve recibirá las últimas noticias de hitpoly a su correo", "success");
        setEmail(""); // Limpia el campo de correo después de un envío exitoso
      } else {
        Swal.fire("Error", data.message || "Hubo un problema al enviar el correo", "error");
      }
    } catch (error) {
      Swal.fire("Error", "No se pudo conectar con el servidor", "error");
    }
  };

  return (
    <Box sx={{ position: "relative", padding: { xs: "0px 20px", md: "40px 150px", height: "100%" } }}>
      <CaptadorCorreo
        image="/images/contactoNewsletter.png"
        title={
          <Typography variant="h5" sx={{ fontSize: "1.2rem" }}>
            Recibe las {" "}
            <span style={{ color: "#F21C63" }}>últimas noticias</span> {" "}
            de hitpoly en tu bandeja de entrada
          </Typography>
        }
        description="Recibe directamente en tu correo las últimas actualizaciones y recursos exclusivos. Su información se utilizará de acuerdo con la política de privacidad de Datos."
        email={email}
        setEmail={setEmail} // Pasa el estado y la función para actualizarlo
        onSubmit={handleSubmit} // Pasa la función para manejar el envío
      />
    </Box>
  );
}

export default Newsletter;
