import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import PostCardOne from "../../../components/cards/cardPrincipal";
import PostCardTwo from "../../../components/cards/cardPosicionTwo";

function Portada() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://apinewblog.hitpoly.com/ajax/getArticuloController.php`)
      .then((response) => response.json())
      .then((data) => {
        const importantArticles = data
          .filter((article) => article.area === "articulos_importantes")
          .sort((a, b) => new Date(b.fecha_actual) - new Date(a.fecha_actual));

        setArticles(importantArticles);
      })
      .catch((error) => console.error("Error al obtener los artículos:", error));
  }, []);

  const handleArticleClick = (id) => {
    if (id) {
      navigate(`/article/${id}`);
    } else {
      console.error("ID del artículo no válido");
    }
  };

  return (
    <Box>
      <Grid container spacing={3} sx={{ padding: { xs: "20px 10px", md: "20px 100px" }, width: "100%" }}>
        {/* Artículo principal */}
        <Grid item xs={12} sm={8}>
          <Box sx={{ backgroundColor: "#f9f9f9" }}>
            {articles.length > 0 && (
              <PostCardOne
                image={articles[0].post_image_url || "URL_POR_DEFECTO"}
                title={articles[0].title || "Sin título"}
                subtitle={articles[0].subtitle || ""}
                creator={articles[0].author_name || "Anónimo"}
                date={articles[0].fecha_actual || ""}
                linkText={articles[0].linkText || "Leer más"}
                linkArticle={`/article/${articles[0].article_id}`}
              />
            )}
          </Box>
        </Grid>

        {/* Otros artículos */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: "#ffffff", height: "100%", paddingLeft: "20px", display: "flex", flexDirection: "column" }}>
            {articles.slice(1, 3).map((article, index) => (
              <Box key={article.article_id} sx={{ marginBottom: index === 0 ? "16px" : "0" }}>
                <PostCardTwo
                  image={article.post_image_url}
                  title={article.title}
                  linkText={"Leer más"}
                  linkArticle={`/article/${article.article_id}`}
                  creator={article.author_name || "Anónimo"}
                />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Portada;
