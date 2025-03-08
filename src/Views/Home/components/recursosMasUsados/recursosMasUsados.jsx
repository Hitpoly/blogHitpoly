import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import TextSectionComponent from "../../../components/textos/estructuraIzquierda/componenteDeTexto";
import RecursosMasUsadosBase from "../../../components/cards/cardRecursosMasUsados";

function RecursosMasUsados() {
  const [posts, setPosts] = useState({ marketing: [], ventas: [], tecnologia: [] });
  const navigate = useNavigate();

  useEffect(() => {
    // fetch("http://localhost/bloghitpoly/ajax/getArticuloController.php")
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

  const handleArticleClick = (id) => {
    console.log("Redirigiendo a:", `/article/${id}`); // Verifica en consola
    navigate(`/article/${id}`);
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
                  onClick={() => handleArticleClick(post.article_id)} // Aquí se ejecuta el evento
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
