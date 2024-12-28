import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const IndexSection = ({ 
  breadcrumb, 
  title, 
  description, 
  buttonText, 
  buttonIcon, 
  onButtonClick, 
  backgroundImage, 
  contentText 
}) => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      {/* Breadcrumb */}
      <Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {breadcrumb}
        </Typography>
      </Box>

      {/* Contenedor principal */}
      <Grid container spacing={4} alignItems="center" padding={4}>
        {/* Título y botón a la derecha */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            {title}
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            {description}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={buttonIcon}
            sx={{ textTransform: "none" }}
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </Grid>

        {/* Imagen o fondo */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: backgroundImage ? "transparent" : "#f0f0f0",
              backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "250px",
            }}
          />
        </Grid>
      </Grid>

      {/* Texto adicional */}
      <Box sx={{ padding: "50px" }}>
        <Typography variant="body1" color="text.secondary">
          {contentText}
        </Typography>
      </Box>
    </Container>
  );
};

export default IndexSection;
