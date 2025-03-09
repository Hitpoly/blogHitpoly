import React from "react";
import { Box, List, ListItem, ListItemText, Container } from "@mui/material";

const ArticleIndex = ({
  title = "Índice del artículo",
  items = [],
  containerStyles = {},
  boxStyles = {},
  titleStyles = {},
  listStyles = {},
}) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        marginTop: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "25vw",
        ...containerStyles,
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#F5F5F5",
          padding: 3,
          borderRadius: 2,
          width: "50vw",
          textAlign: "center",
          boxShadow: 1,
          ...boxStyles,
        }}
      >
        {/* Título flotante */}
        <Box
          sx={{
            position: "absolute",
            top: "-15px",
            left: "20px",
            backgroundColor: "#E0E0E0",
            borderRadius: "10px",
            padding: "4px 12px",
            fontSize: "1.3rem",
            fontWeight: "500",
            color: "#333",
            boxShadow: 1,
            ...titleStyles,
          }}
        >
          {title}
        </Box>

        {/* Lista */}
        <List sx={{ ...listStyles }}>
          {items.length > 0 ? (
            items.map((item, index) => (
              <ListItem
                key={index}
                disablePadding
              >
                <ListItemText
                  primary={`${index + 1}. ${item}`}
                  sx={{
                    textAlign: "center",
                  }}
                />
              </ListItem>
            ))
          ) : (
            <ListItem disablePadding>
              <ListItemText
                primary="No hay elementos en el índice."
                sx={{
                  textAlign: "center",
                  color: "gray",
                }}
              />
            </ListItem>
          )}
        </List>
      </Box>
    </Container>
  );
};

export default ArticleIndex;
