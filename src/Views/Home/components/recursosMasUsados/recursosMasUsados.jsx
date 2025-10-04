import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import TextSectionComponent from "../../../components/textos/estructuraIzquierda/componenteDeTexto";
import RecursosMasUsadosBase from "../../../components/cards/cardRecursosMasUsados";

// 🔑 FUNCIÓN NECESARIA: Genera el slug a partir del título
const slugify = (text) => {
  if (!text) return '';
  return text
    .toLowerCase()
    .trim()
    .replace(/[ñáéíóúü]/g, (match) => {
      const replacements = { 'ñ': 'n', 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u' };
      return replacements[match] || match;
    })
    .replace(/\s+/g, '-') 
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};


function RecursosMasUsados() {
  const [posts, setPosts] = useState({ marketing: [], ventas: [], tecnologia: [] });
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://apinewblog.hitpoly.com/ajax/getArticuloController.php")
      .then((response) => response.json())
      .then((data) => {
        const categorizedPosts = { marketing: [], ventas: [], tecnologia: [] };

        data.forEach((post) => {
          if (post.area in categorizedPosts) {
            categorizedPosts[post.area].push(post);
          }
        });

        setPosts(categorizedPosts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // 🔑 LÓGICA ACTUALIZADA: Recibe el ID y el título para generar el slug-id
  const handleArticleClick = (id, title) => {
    // 💡 NOTA IMPORTANTE: El código original llamaba a handleArticleClick solo con el ID:
    // onClick={() => handleArticleClick(post.article_id)}
    // Debes actualizar el onClick para pasar también el TÍTULO.
    // Usaremos un valor por defecto ('Artículo sin Título') en caso de que 'title' no se pase
    const slug = slugify(title || 'Artículo sin Título'); 
    const path = `/article/${slug}-${id}`;
    
    console.log("Redirigiendo a:", path); // Verifica en consola
    navigate(path);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        width: "100%",
        height: { xs: "auto", md: "400px" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          padding: { xs: "20px", md: "0px 150px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "30%" }, padding: { xs: "20px 0", md: "70px 0" } }}>
          <TextSectionComponent
            sectionTitle="RECURSOS"
            mainTitle="Recursos más utilizados"
            description="Utiliza estos recursos para crecer en las distintas etapas de tu proceso digital."
            linkText="Ver todos los Recursos"
            linkUrl="https://www.ejemplo.com"
          />
        </Box>

        <Box
          sx={{
            marginTop: { xs: "40px", md: "0px" },
            position: "relative",
            bottom: "40px",
            width: { xs: "100%", md: "70%" },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: "20px",
            padding: "0px",
          }}
        >
          {["marketing", "tecnologia", "ventas"].map((categoria) =>
            posts[categoria]?.length > 0 ? (
              posts[categoria].slice(0, 1).map((post) => (
                <Box
                  key={post.article_id}
                  sx={{
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer", // Agrega cursor pointer para indicar clic
                  }}
                  // 🚨 CORRECCIÓN: Ahora se pasan el ID y el TITLE al manejador de clic
                  onClick={() => handleArticleClick(post.article_id, post.title)} 
                >
                  <RecursosMasUsadosBase
                    image={post.post_image_url}
                    linkCategoria={post.area}
                    title={post.title}
                    area={post.area}
                    creator=""
                    date={post.fecha_actual}
                    linkText="Leer más"
                  />
                </Box>
              ))
            ) : (
              <Box key={categoria} sx={{ color: "#777", textAlign: "center" }}>
                No hay recursos de {categoria} disponibles.
              </Box>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default RecursosMasUsados;