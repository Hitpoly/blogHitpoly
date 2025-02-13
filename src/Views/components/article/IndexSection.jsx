import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import AppCustomComponent from "../../HomeArticle/components/AppCustomComponent";

const IndexSection = ({ 
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
      <Box sx={{ textAlign: 'left', marginBottom: 2 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {breadcrumb}
        </Typography>
      </Box>

      {/* Título principal */}
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2, textAlign: 'left' }}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.primary" paragraph sx={{ fontWeight: "bold", textAlign: 'left' }}>
        <strong>{area}</strong> - {date}
      </Typography>
      
      {/* Botón debajo del título */}
      <Button
        variant="contained"
        color="primary"
        startIcon={buttonIcon}
        sx={{ textTransform: "none", marginBottom: 3 }}
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>

      {/* Primer párrafo exactamente igual a la imagen */}
      {contentText && contentText.length > 0 && contentText[0] && (
        <Box sx={{ 
          backgroundColor: "#f8f8f8", 
          padding: "20px", 
          borderRadius: "8px", 
          marginBottom: "20px",
          textAlign: "left"
        }}>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: "1.1rem", 
              fontWeight: "500", 
              color: "#333" 
            }}
          >
            {contentText[0].content}
          </Typography>
        </Box>
      )}

      {/* Componente personalizado */}
      <AppCustomComponent />

      {/* Otros bloques de contenido */}
      {contentText && contentText.slice(1).map((block, index) => (
        <Box key={index} sx={{ marginBottom: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            {block.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {block.content}
          </Typography>
        </Box>
      ))}
    </Container>
  );
};

export default IndexSection;
