import React from "react";
import { Button } from "@mui/material";

const BotonContactar = () => {
  return (
    <Button
      sx={{
        backgroundColor: "#F21C63",
        color: "#fff",
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "16px",
        padding: "10px 20px",
        borderRadius: "5px",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#cc0b4b",
        },
      }}
    >
      Contactar Ahora
    </Button>
  );
};

export default BotonContactar;
