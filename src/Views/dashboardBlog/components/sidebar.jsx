import React, { useState } from "react";
import { Box, Typography, IconButton, Divider, Drawer } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import CreateIcon from "@mui/icons-material/Create";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>      
      <IconButton
        onClick={handleToggle}
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          display: { xs: "block", md: "none" }, 
        }}
      >
        <MenuIcon sx={{ color: "black" }} />
      </IconButton>
      
      <Box
        sx={{
          backgroundColor: "#F21C63",
          width: "250px",
          height: "100vh",
          color: "#ECF0F1",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          padding: "20px",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <Box display="flex" alignItems="center" flexDirection="column" mb={3}>
          <AccountCircleIcon sx={{ fontSize: 60, color: "#ECF0F1" }} />
          <Typography variant="h6">Bienvenido</Typography>
          <Typography variant="body2">usuario@mail.com</Typography>
        </Box>

        <Divider sx={{ width: "100%", backgroundColor: "#34495E", mb: 3 }} />

        <Box display="flex" flexDirection="column" alignItems="center" width="100%" gap={2}>
          <IconButton
            sx={{ color: "#ECF0F1", width: "100%", justifyContent: "flex-start", pl: 3 }}
            onClick={() => handleNavigation("/dashboardBlog")}
          >
            <HomeIcon sx={{ mr: 2 }} />
            <Typography variant="body1">Inicio</Typography>
          </IconButton>

          <IconButton
            sx={{ color: "#ECF0F1", width: "100%", justifyContent: "flex-start", pl: 3 }}
            onClick={() => handleNavigation("/dashboardBlog/articulos")}
          >
            <ArticleIcon sx={{ mr: 2 }} />
            <Typography variant="body1">Artículos</Typography>
          </IconButton>

          <IconButton
            sx={{ color: "#ECF0F1", width: "100%", justifyContent: "flex-start", pl: 3 }}
            onClick={() => handleNavigation("/dashboardBlog/crear-articulo")}
          >
            <CreateIcon sx={{ mr: 2 }} />
            <Typography variant="body1">Crear Artículo</Typography>
          </IconButton>
        </Box>

        <Divider sx={{ width: "100%", backgroundColor: "#34495E", mt: "auto", mb: 2 }} />

        <IconButton
          sx={{
            color: "#ECF0F1",
            width: "100%",
            justifyContent: "flex-start",
            pl: 3,
            backgroundColor: "#E74C3C",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#C0392B",
            },
          }}
          onClick={() => {
            dispatch({ type: "LOGOUT" });
            handleNavigation("/login");
          }}
        >
          <LogoutIcon sx={{ mr: 2 }} />
          <Typography variant="body1">Cerrar Sesión</Typography>
        </IconButton>
      </Box>

      <Drawer
        anchor="left"
        open={open}
        onClose={handleToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box
          sx={{
            width: "250px",
            height: "100vh",
            backgroundColor: "#F21C63",
            color: "#ECF0F1",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <Box display="flex" alignItems="center" flexDirection="column" mb={3}>
            <AccountCircleIcon sx={{ fontSize: 60, color: "#ECF0F1" }} />
            <Typography variant="h6">Bienvenido</Typography>
            <Typography variant="body2">usuario@mail.com</Typography>
          </Box>

          <Divider sx={{ width: "100%", backgroundColor: "#34495E", mb: 3 }} />

          <Box display="flex" flexDirection="column" alignItems="center" width="100%" gap={2}>
            <IconButton
              sx={{ color: "#ECF0F1", width: "100%", justifyContent: "flex-start", pl: 3 }}
              onClick={() => handleNavigation("/dashboardBlog")}
            >
              <HomeIcon sx={{ mr: 2 }} />
              <Typography variant="body1">Inicio</Typography>
            </IconButton>

            <IconButton
              sx={{ color: "#ECF0F1", width: "100%", justifyContent: "flex-start", pl: 3 }}
              onClick={() => handleNavigation("/dashboardBlog/articulos")}
            >
              <ArticleIcon sx={{ mr: 2 }} />
              <Typography variant="body1">Artículos</Typography>
            </IconButton>

            <IconButton
              sx={{ color: "#ECF0F1", width: "100%", justifyContent: "flex-start", pl: 3 }}
              onClick={() => handleNavigation("/dashboardBlog/crear-articulo")}
            >
              <CreateIcon sx={{ mr: 2 }} />
              <Typography variant="body1">Crear Artículo</Typography>
            </IconButton>
          </Box>

          <Divider sx={{ width: "100%", backgroundColor: "#34495E", mt: "auto", mb: 2 }} />

          <IconButton
            sx={{
              color: "#ECF0F1",
              width: "100%",
              justifyContent: "flex-start",
              pl: 3,
              backgroundColor: "#E74C3C",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#C0392B",
              },
            }}
            onClick={() => {
              dispatch({ type: "LOGOUT" });
              handleNavigation("/login");
            }}
          >
            <LogoutIcon sx={{ mr: 2 }} />
            <Typography variant="body1">Cerrar Sesión</Typography>
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
