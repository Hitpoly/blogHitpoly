import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CustomComponent = ({
  backgroundColor = "#0B8DB5",
  textColor = "#ffffff",
  imageBackground = "#ccc",
  imageSrc, // Nueva prop para la imagen
  title,
  description,
  listItems = [],
  buttonPrimaryText,
  buttonPrimaryAction,
  buttonSecondaryText,
  buttonSecondaryAction,
}) => {
  return (
    <Container
      maxWidth="lg"
      sx={{ marginTop: 4, padding: 0 }}
    >
      <Box
        sx={{
          backgroundColor: backgroundColor,
          color: textColor,
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
        >
          {/* Imagen a la izquierda */}
          <Grid
            item
            xs={12}
            md={3}
          >
            {imageSrc ? (
              <Box
                component="img"
                src={imageSrc}
                alt="Custom Image"
                sx={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: imageBackground,
                  borderRadius: "4px",
                }}
              />
            )}
          </Grid>

          {/* Contenido a la derecha */}
          <Grid
            item
            xs={12}
            md={9}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              paragraph
            >
              {description}
            </Typography>

            {/* Lista de puntos */}
            <Grid
              container
              spacing={2}
            >
              {listItems.map((column, columnIndex) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={`column-${columnIndex}`}
                >
                  <List>
                    {column.map((item, itemIndex) => (
                      <ListItem key={`item-${columnIndex}-${itemIndex}`}>
                        <ListItemIcon>
                          <CheckCircleIcon sx={{ color: textColor }} />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
            </Grid>

            {/* Botones */}
            <Box sx={{ marginTop: 3 }}>
              {buttonPrimaryText && (
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#F21C63",
                    color: "#ffffff",
                    marginRight: 2,
                    "&:hover": { backgroundColor: "#D4265A" },
                  }}
                  onClick={buttonPrimaryAction}
                >
                  {buttonPrimaryText}
                </Button>
              )}
              {buttonSecondaryText && (
                <Button
                  variant="text"
                  sx={{ color: textColor, textDecoration: "underline" }}
                  onClick={buttonSecondaryAction}
                >
                  {buttonSecondaryText}
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CustomComponent;
