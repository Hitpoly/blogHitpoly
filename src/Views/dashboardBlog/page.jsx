import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import CreateArticle from "./components/CreateArticle";
import Sidebar from "./components/sidebar";
import axios from "axios"; // Importa axios

// Componente Home
const Home = () => {
  return (
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
};

const DashboardBlog = () => {
  // Función para verificar la sesión usando axios
  async function verificarSesion() {
    try {
      const response = await axios.post(
        "https://apinewblog.hitpoly.com/ajax/usuarioController.php",
        {
          funcion: "verificar_sesion",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Asegúrate de incluir las cookies
        }
      );

      // Verificar si la respuesta es exitosa
      if (response.status === 200) {
        const data = response.data;
        console.log("Respuesta recibida del servidor:", data);

        if (data.status === "error") {
          console.error("No session found");
        } else {
          console.log("Sesion encontrada:", data);
        }
      } else {
        console.error("Error en la solicitud:", response.status);
      }
    } catch (error) {
      console.error("Error al verificar sesión:", error);
    }
  }

  useEffect(() => {
    verificarSesion(); // Verificar sesión al montar el componente
  }, []); // El array vacío asegura que se ejecute solo una vez al montar

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
