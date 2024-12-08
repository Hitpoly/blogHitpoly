import React from "react";
import { Button } from "@mui/material";

const EleganteBoton = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderColor: "#F21C63",
        color: "#F21C63",
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "16px",
        padding: "10px 20px",
        borderRadius: "5px",
        transition: "all 0.3s ease",
      }}
    >
      Agendar una consulta
    </Button>
  );
};

export default EleganteBoton;
