import React from "react";
import Sidebar from "./components/sidebar";
import { Box } from "@mui/material";
import CreateArticle from "./components/CreateArticle";
import ArticleList from "./components/ArticleList";
import { Routes, Route } from "react-router-dom";

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
