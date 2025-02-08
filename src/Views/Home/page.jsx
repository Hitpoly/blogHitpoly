import { Box } from "@mui/material";
import React from "react";
import Footer from "../components/footer/page";
import MarketingCards from "./components/marketingSection/MarketingCards";
import Newsletter from "./components/newsletter/captadorCorreo";
import OportunidadesImportantes from "./components/oportunidadesImportantes/oportunidadesDestacadas";
import Portada from "./components/portada/portada";
import RecursosMasUsados from "./components/recursosMasUsados/recursosMasUsados";
import TecnologiaCards from "./components/tecnologiaSection/tecnologiaCards";
import VentasCards from "./components/ventasSection/VentasCards";
import VideosDestacados from "./components/videosDestacados/VideosMasVistos";

function Home() {
  // useEffect(() => {
  //   verificarSesion(); // Verificar sesión al montar el componente
  // }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Portada />
      <RecursosMasUsados />
      <Newsletter />
      <Box
        sx={{
          padding: {
            xs: "10px 30px",
            md: "10px 100px",
          },
          display: "flex",
          flexDirection: "column",
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
          },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TecnologiaCards />
      </Box>
      <OportunidadesImportantes />
      <Footer />
    </Box>
  );
}

export default Home;
