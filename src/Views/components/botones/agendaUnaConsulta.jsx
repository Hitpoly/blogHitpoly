import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom

const EleganteBoton = () => {
  return (
    <Link to="https://meetings.hubspot.com/hitpoly?uuid=34a2179d-26a9-46dc-9eae-98738ae67fae" style={{ textDecoration: "none" }}>
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
    </Link>
  );
};

export default EleganteBoton;
