import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";  // Únicamente esta línea
import { Box } from "@mui/material";  // Esta también debe estar solo una vez
import Home from "./Views/Home/page";
import MenuDeNavegacion from "./Views/components/navbar/navbar";
import DashboardBlog from "./Views/dashboardBlog/page";
import Login from "./Views/login/page";
import Article from "./Views/HomeArticle/page.jsx";
import ArticleDetail from "./Views/Home/components/articuloDatail/articuloDetail.jsx";



function App() {
  const location = useLocation();

  // Ocultar el menú de navegación si estamos en el dashboardBlog o en login
  const hideMenu = location.pathname.startsWith("/dashboardBlog") || location.pathname === "/login";

  return (
    <Box>
      {/* Solo mostrar el menú de navegación si no estamos en login ni en dashboardBlog */}
       {!hideMenu && <MenuDeNavegacion />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboardBlog/*" element={<DashboardBlog />} />
        <Route path="/article/:id" element={<ArticleDetail />} /> 
        <Route path="/articulo" element={<Article />} /> 
      </Routes>
    </Box>
  );
}

export default App;
