import { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import PostCardOne from "../../../components/cards/cardPrincipal";
import PostCardTwo from "../../../components/cards/cardPosicionTwo";
import { ar } from "date-fns/locale";

function Portada() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // fetch(`http://localhost/bloghitpoly/ajax/getArticuloController.php`)
    fetch(`https://apiblog.hitpoly.com/ajax/getArticuloController.php`)
      .then((response) => response.json())
      .then((data) => {
        // Filtrar solo los artículos importantes
        const importantArticles = data.filter(
          (article) => article.area === "articulos_importantes"
        );
        setArticles(importantArticles);
      })
      .catch((error) =>
        console.error("Error al obtener los artículos:", error)
      );
  }, []);

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
        <Grid
          item
          xs={12}
          sm={8}
        >
          <Box
            sx={{
              backgroundColor: "#f9f9f9",
            }}
          >
            <PostCardOne
              image={articles[0]?.post_image_url || "URL_POR_DEFECTO"}
              linkCategoria={articles[0]?.linkCategoria || ""}
              title={articles[0]?.title || "Sin título"}
              subtitle={articles[0]?.subtitle || ""}
              creator={articles[0]?.creator || "Anónimo"}
              date={articles[0]?.fecha_actual || ""}
              linkText={articles[0]?.linkText || ""}
              postId={articles[0]?.article_id || ""}
              linkArticle={articles[0]?.linkArticle || ""}
            />
          </Box>
        </Grid>

        {/* Caja 30% de ancho para futuros componentes */}
        <Grid
          item
          xs={12}
          sm={4}
        >
          <Box
            sx={{
              backgroundColor: "#ffffff",
              height: "100%",
              paddingLeft: "20px",
              display: "flex",
              flexDirection: "column",
              paddingTop: "0px",
              marginTop: { xs: "-50px", md: "0" },
            }}
          >
            <Box>
              <PostCardTwo
                image={articles[0]?.post_image_url}
                linkCategoria={articles[0]?.linkCategoria}
                title={articles[0]?.title}
                linkText={articles[0]?.linkText}
                postId={articles[0]?.article_id}
                linkArticle={articles[0]?.linkArticle}
              />
            </Box>
            <Box sx={{ marginBottom: "16px" }}>
              <PostCardTwo
                image={articles[0]?.post_image_url}
                linkCategoria={articles[0]?.linkCategoria}
                title={articles[0]?.title}
                linkText={articles[0]?.linkText}
                postId={articles[0]?.article_id}
                linkArticle={articles[0]?.linkArticle}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Portada;
