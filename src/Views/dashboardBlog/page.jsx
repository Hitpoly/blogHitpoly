import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { verificarSesion } from "../../services/verificarSesion"; // Importar verificarSesion
import ArticleList from "./components/ArticleList";
import CreateArticle from "./components/CreateArticle";
import Sidebar from "./components/sidebar";

const Home = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20%",
    }}
  >
    <img
      src="/images/logo-hitpoly.png"
      alt="HitPoly Logo"
      style={{
        maxWidth: "300px",
        height: "auto",
      }}
    />
  </Box>
);

const DashboardBlog = () => {
  useEffect(() => {
    verificarSesion(); // Verificar sesión al montar el componente
  }, []);

  return (
    <Box display="flex" height="100vh">
      <Sidebar />
      <Box
        sx={{
          flex: 1,
          padding: 3,
          marginLeft: { md: "250px", xs: 0 },
          overflowY: "auto",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="articulos" element={<ArticleList />} />
          <Route path="crear-articulo" element={<CreateArticle />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default DashboardBlog;
