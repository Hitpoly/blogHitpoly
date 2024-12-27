import React from "react";
import { Box, Typography } from "@mui/material";

const SectionCard = ({ title, subtitle, description, imageAlt, imageSrc }) => {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {title}: <span style={{ fontWeight: "normal" }}>{subtitle}</span>
      </Typography>
      <Typography variant="body1" sx={{ marginY: 2 }}>
        {description}
      </Typography>
      <Box
        sx={{
          textAlign: "center",
          marginTop: 4,
          padding: 2,
          backgroundColor: "#F5F5F5",
          borderRadius: 2,
        }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{ width: "100%", maxWidth: "100%", borderRadius: "8px" }}
          />
        ) : (
          <Typography variant="body2">Imagen no disponible</Typography>
        )}
      </Box>
    </Box>
  );
};

export default SectionCard;
