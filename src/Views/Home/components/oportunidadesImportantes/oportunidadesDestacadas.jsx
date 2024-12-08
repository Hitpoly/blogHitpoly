import React from "react";
import { Box } from "@mui/material";
import TextSectionComponent from "../../../components/textos/estructuraIzquierda/componenteDeTexto"; // Importando el componente de texto
import postsData from "./oportunidades.json";
import OportunidadesDemandadas from "../../../components/cards/cardOportunidades";

function OportunidadesImportantes() {
  const { marketing, ventas, tecnologia } = postsData;

  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        width: "100%",
        height: { xs: "100%", md: "400px" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "0px 0px", md: "40px 0px" },
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
            sectionTitle="OPORTUNIDADES"
            mainTitle="Explora nuestras oportunidades"
            description="Únete a Hitpoly y forma parte de un equipo innovador. Tenemos oportunidades en marketing, ventas, atención al cliente y tecnología."
            linkText="Ver todas las Oportunidades"
            linkUrl="https://www.hitpoly.com/oportunidades"
          />
        </Box>

        {/* 70% para las 3 cajas */}
        <Box
          sx={{
            marginTop: { xs: "40px", md: "0px" },
            position: "relative",
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
            <OportunidadesDemandadas
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
            <OportunidadesDemandadas
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
            <OportunidadesDemandadas
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

export default OportunidadesImportantes;
