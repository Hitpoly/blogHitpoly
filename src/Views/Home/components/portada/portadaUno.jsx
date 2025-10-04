import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import PostCardOne from "../../../components/cards/cardPrincipal";
import PostCardTwo from "../../../components/cards/cardPosicionTwo";

// ⬅️ FUNCIÓN PARA CONVERTIR TÍTULO EN SLUG
const slugify = (text) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .trim()
    .replace(/[ñáéíóúü]/g, (match) => {
      // Reemplaza caracteres especiales (tilde y eñe)
      const replacements = { 'ñ': 'n', 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u' };
      return replacements[match] || match;
    })
    .replace(/\s+/g, '-')           // Reemplaza espacios con guiones
    .replace(/[^\w\-]+/g, '')       // Elimina todos los caracteres no alfanuméricos (excepto guiones)
    .replace(/\-\-+/g, '-');        // Reemplaza guiones múltiples con uno solo
};

function Portada() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching articles...");
    fetch(`https://apinewblog.hitpoly.com/ajax/getArticuloController.php`)
      .then((response) => {
        console.log("API response received:", response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Raw data from API:", data);

        // Asegúrate de que los datos sean un array
        if (!Array.isArray(data)) {
          console.error("API response is not an array:", data);
          setArticles([]);
          return;
        }

        // Simplemente ordena todos los artículos por fecha, sin filtrar por 'area'
        const allArticlesSorted = data.sort((a, b) => {
          const dateA = new Date(a.fecha_actual);
          const dateB = new Date(b.fecha_actual);
          // Manejo de fechas inválidas para evitar errores de ordenamiento
          if (isNaN(dateA.getTime())) {
            console.warn(`Fecha inválida para el artículo: ${a.title} - ${a.fecha_actual}`);
            return 0;
          }
          if (isNaN(dateB.getTime())) {
            console.warn(`Fecha inválida para el artículo: ${b.title} - ${b.fecha_actual}`);
            return 0;
          }
          return dateB - dateA; // Ordena del más reciente al más antiguo
        });

        console.log("All articles (sorted by date):", allArticlesSorted); // Verás todos los artículos aquí
        setArticles(allArticlesSorted);
      })
      .catch((error) => console.error("Error al obtener los artículos:", error));
  }, []);
  
  // ⬅️ FUNCIÓN CLAVE: Generar el enlace con SLUG y ID
  const getArticleLink = (article) => {
      if (!article || !article.article_id || !article.title) return "#";
      const slug = slugify(article.title);
      // Formato de ruta: /article/slug-id (ej: /article/mi-titulo-38)
      return `/article/${slug}-${article.article_id}`;
  };

  // La función handleArticleClick original no se utiliza en el JSX, por lo que se puede eliminar
  // o modificar si se usa en otro lugar. La mantendremos por ahora como referencia, pero ya no 
  // afecta a las tarjetas:
  const handleArticleClick = (id) => {
    if (id) {
      // Esta función debería ser actualizada si la usas con un onClick:
      const articleToNavigate = articles.find(art => art.article_id == id);
      if(articleToNavigate) {
          navigate(getArticleLink(articleToNavigate));
      }
    } else {
      console.error("ID del artículo no válido");
    }
  };

  useEffect(() => {
    console.log("Articles state updated:", articles);
  }, [articles]);

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
                // ⬅️ Usar getArticleLink
                linkArticle={getArticleLink(articles[0])} 
              />
            )}
            {articles.length === 0 && <p>No hay artículos disponibles.</p>}
          </Box>
        </Grid>

        {/* Otros artículos */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ backgroundColor: "#ffffff", height: "100%", paddingLeft: "20px", display: "flex", flexDirection: "column", textAlign: "right" }}>
            {articles.slice(1, 3).map((article, index) => (
              <Box key={article.article_id} sx={{ marginBottom: index === 0 ? "16px" : "0" }}>
                <PostCardTwo
                  image={article.post_image_url}
                  title={article.title}
                  linkText={"Leer más"}
                  // ⬅️ Usar getArticleLink
                  linkArticle={getArticleLink(article)}
                  creator={article.author_name || "Anónimo"}
                />
              </Box>
            ))}
            {articles.slice(1, 3).length === 0 && <p>No hay otros artículos disponibles.</p>}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Portada;