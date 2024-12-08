import React from "react";
import { Grid, Box } from "@mui/material";
import PostCardOne from "../../../components/cards/cardPrincipal";
import PostCardTwo from "../../../components/cards/cardPosicionTwo";
import postsData from "./postsRelevantesData.json";

function Portada() {
  const { marketing, ventas, tecnologia } = postsData;

  return (
    <Box>
      <Grid
        container
        spacing={3}
        sx={{
          padding: { xs: "20px 10px", md: "20px 100px" },
          width: "100%",
          height: "100%",
        }}
      >
        {/* Caja 70% de ancho con un único PostCardOne */}
        <Grid item xs={12} sm={8}>
          <Box
            sx={{
              backgroundColor: "#f9f9f9",
            }}
          >
            <PostCardOne
              image={marketing[0].image}
              linkCategoria={marketing[0].linkCategoria}
              title={marketing[0].title}
              subtitle={marketing[0].subtitle}
              creator={marketing[0].creator}
              date={marketing[0].date}
              linkText={marketing[0].linkText}
              postId={marketing[0].id}
              linkArticle={marketing[0].linkArticle}
            />
          </Box>
        </Grid>

        {/* Caja 30% de ancho para futuros componentes */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              backgroundColor: "#ffffff",
              height: "100%",
              paddingLeft: "20px",
              display: "flex",
              flexDirection: "column",
              paddingTop: "0px",
            }}
          >
            <Box>
              <PostCardTwo
                image={ventas[0].image}
                linkCategoria={ventas[0].linkCategoria}
                title={ventas[0].title}
                linkText={ventas[0].linkText}
                postId={ventas[0].id}
                linkArticle={ventas[0].linkArticle}
              />
            </Box>
            <Box sx={{ marginBottom: "16px" }}>
              <PostCardTwo
                image={tecnologia[0].image}
                linkCategoria={tecnologia[0].linkCategoria}
                title={tecnologia[0].title}
                linkText={tecnologia[0].linkText}
                postId={tecnologia[0].id}
                linkArticle={tecnologia[0].linkArticle}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Portada;
