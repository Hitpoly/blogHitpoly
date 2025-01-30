import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

const BotonContactar = () => {
  return (
    <Link to="https://wa.me/51933961352" style={{ textDecoration: "none" }}>
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
    </Link>
  );
};

export default BotonContactar;
