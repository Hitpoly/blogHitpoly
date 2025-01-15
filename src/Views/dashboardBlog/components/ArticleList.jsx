import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid2,
  Modal,
  Button,
} from "@mui/material";
import { getPosts } from "../../../services/postService";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null); // Estado para el artículo seleccionado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal

  useEffect(() => {
    getPosts()
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleOpenModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="h6">Cargando...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: { xs: "16px", md: "18px 16px 16px 32px" } }}>
      <Grid2 container spacing={4} justifyContent="center">
        {articles.length === 0 ? (
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Typography variant="h6" color="textSecondary">
              No hay artículos disponibles.
            </Typography>
          </Box>
        ) : (
          articles.map((article, index) => (
            <Grid2 item key={index} xs={12} sm={6} md={3} lg={4}>
              <Card
                onClick={() => handleOpenModal(article)} // Abre el modal al hacer clic
                sx={{
                  width: { xs: "100%", sm: "70%", md: "360px" },
                  color: "#FFFFFF",
                  borderRadius: "15px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
                  flexDirection: "column",
                  margin: "30px auto",
                  cursor: "pointer",
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={article.image_url || "../../../assets/Desarrollo.webp"}
                  alt={article.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent
                  sx={{
                    marginTop: "0px",
                    marginLeft: "20px",
                    marginRight: "20px",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "#B51AD8", marginBottom: "20px" }}
                  >
                    {article.area}{" "}
                    {format(
                      new Date(article.created_at),
                      "dd 'de' MMMM 'de' yyyy",
                      {
                        locale: es,
                      }
                    )}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "#211E26", marginBottom: "10px" }}
                  >
                    {article.title}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#A0A0A0",
                      marginBottom: "20px",
                      fontSize: "1rem",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 4,
                      textOverflow: "ellipsis",
                    }}
                  >
                    {article.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))
        )}
      </Grid2>

      {/* Modal para mostrar la información de la tarjeta seleccionada */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            backgroundColor: "#37183E",
            color: "#FFFFFF",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: "600px",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius: "10px",
          }}
        >
          {selectedArticle && (
            <>
              {selectedArticle.image_url && (
                <Box
                  component="img"
                  src={selectedArticle.image_url}
                  alt={selectedArticle.title}
                  sx={{
                    width: "100%",
                    borderRadius: "8px",
                    marginBottom: "20px",
                  }}
                />
              )}
              <Typography
                variant="body1"
                sx={{ color: "#B51AD8", marginBottom: "20px" }}
              >
                {selectedArticle.area}{" "}
                {format(
                  new Date(selectedArticle.created_at),
                  "dd 'de' MMMM 'de' yyyy",
                  {
                    locale: es,
                  }
                )}
              </Typography>
              <Typography
                id="modal-title"
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  marginBottom: "20px",
                }}
              >
                {selectedArticle.title}
              </Typography>
              <Typography
                id="modal-description"
                variant="body2"
                sx={{
                  color: "#A0A0A0",
                  marginBottom: "20px",
                  fontSize: "1rem",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {selectedArticle.content}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default ArticleList;
