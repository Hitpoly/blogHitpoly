import React from "react";
import Portada from "./components/portada/portada";
import RecursosMasUsados from "./components/recursosMasUsados/recursosMasUsados";
import Newsletter from "./components/newsletter/captadorCorreo";
import MarketingCards from "./components/marketingSection/MarketingCards";
import VentasCards from "./components/ventasSection/VentasCards";
import VideosDestacados from "./components/videosDestacados/VideosMasVistos";
import TecnologiaCards from "./components/tecnologiaSection/tecnologiaCards";
import OportunidadesImportantes from "./components/oportunidadesImportantes/oportunidadesDestacadas";
import Footer from "../components/footer/page";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", }}>
      <Portada />
      <RecursosMasUsados />
      <Newsletter />
      <Box
        sx={{
          padding: {
            xs: "10px 30px",
            md: "10px 100px",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <MarketingCards />
        <VentasCards />
      </Box>
      <Box sx={{ backgroundColor: "#f4f4f4", width: "100%" }}>
        <Box sx={{ margin: { xs: "20px", md: "0px 200px" } }}>
          <VideosDestacados />
        </Box>
      </Box>
      <Box
        sx={{
          padding: {
            xs: "10px 30px",
            md: "10px 100px",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <TecnologiaCards />
      </Box>
      <OportunidadesImportantes />
      <Footer/>
    </Box>
  );
}

export default Home;
