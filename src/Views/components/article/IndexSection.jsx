import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import AppCustomComponent from "../../HomeArticle/components/AppCustomComponent";

const IndexSection= ({ 
  breadcrumb, 
  title, 
  area,
  date, 
  buttonText, 
  buttonIcon, 
  onButtonClick, 
  backgroundImage, 
  contentText  
}) => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      {/* Breadcrumb */}
      <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
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
          <strong>{area}</strong> - {date}
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

      <AppCustomComponent />

      {/* Texto adicional */}
      <Box sx={{ padding: "50px" }}>
        {contentText && contentText.map((block, index) => (
          <Box key={index} sx={{ marginBottom: 4 }}>
            {/* Título de la sección */}
            <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
              {block.title}
            </Typography>
            {/* Contenido de la sección */}
            <Typography variant="body1" color="text.secondary">
              {block.content}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default IndexSection;
