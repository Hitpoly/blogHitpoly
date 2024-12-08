import React from "react";
import { Box } from "@mui/material";
import TextSectionComponent from "../../../components/textos/estructuraIzquierda/componenteDeTexto"; // Importando el componente de texto
import postsData from "./postsRecursosMasUsados.json";
import RecursosMasUsadosBase from "../../../components/cards/cardRecursosMasUsados";

function RecursosMasUsados() {
  const { marketing, ventas, tecnologia } = postsData;

  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        width: "100%",
        height: {xS: "auto", md: "400px"},
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          padding: { xs: "20px 20px", md: "0px 150px" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* 30% para el componente de texto */}
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            padding: { xs: "20px 0", md: "70px 0" },
          }}
        >
          <TextSectionComponent
            sectionTitle="RECURSOS"
            mainTitle="Recursos más utilizados"
            description="Utiliza estos recursos para crecer en las distintas etapas de tu proceso digital."
            linkText="Ver todos los Recursos"
            linkUrl="https://www.ejemplo.com"
          />
        </Box>

        {/* 70% para las 3 cajas */}
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
          {/* Cajas de ejemplo */}
          <Box
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <RecursosMasUsadosBase
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
          <Box
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <RecursosMasUsadosBase
              image={tecnologia[0].image}
              linkCategoria={tecnologia[0].linkCategoria}
              title={tecnologia[0].title}
              subtitle={tecnologia[0].subtitle}
              creator={tecnologia[0].creator}
              date={tecnologia[0].date}
              linkText={tecnologia[0].linkText}
              postId={tecnologia[0].id}
              linkArticle={tecnologia[0].linkArticle}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <RecursosMasUsadosBase
              image={ventas[0].image}
              linkCategoria={ventas[0].linkCategoria}
              title={ventas[0].title}
              subtitle={ventas[0].subtitle}
              creator={ventas[0].creator}
              date={ventas[0].date}
              linkText={ventas[0].linkText}
              postId={ventas[0].id}
              linkArticle={ventas[0].linkArticle}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RecursosMasUsados;
