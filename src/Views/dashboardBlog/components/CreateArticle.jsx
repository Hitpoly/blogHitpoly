import React, { useState } from "react";
import { Box, Button, TextField, Typography, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createPost } from "./../../../services/postService" 

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [area, setArea] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async () => {
    if (!title || !description || !area) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Suponiendo que tienes un token CSRF (este ejemplo solo pasa un string vacío)
      const csrfToken = ""; // Aquí deberías obtener el token real desde tu backend
      const postData = { title, content: description, area }; // Ahora incluye 'area' en los datos del artículo

      // Llamar a la función createPost
      const response = await createPost(postData, csrfToken, image);
      console.log("Artículo creado:", response);

      setSuccess(true); // Éxito en la creación
      setTitle("");
      setDescription("");
      setImage(null);
      setArea(""); // Limpiar el área después de la publicación
    } catch (error) {
      setError("Error al crear el artículo: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 500,
        margin: "0 auto",
        p: 3,
      }}
    >
      <Typography variant="h4" component="h2" style={{ color: "#B51AD8" }}>
        Crear Nuevo Artículo
      </Typography>

      <TextField
        label="Título"
        variant="outlined"
        color="secondary"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        slotProps={{
          input: {
            style: {
              backgroundColor: "#ffffff", // Fondo blanco para el campo de texto
              color: "#000000", // Texto oscuro
            },
          },
          label: {
            style: {
              color: "#B51AD8", // Color para el label
            },
          },
        }}
      />

      <TextField
        label="Descripción"
        variant="outlined"
        color="secondary"
        fullWidth
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        slotProps={{
          input: {
            style: {
              backgroundColor: "#ffffff", // Fondo blanco para el campo de texto
              color: "#000000", // Texto oscuro
            },
          },
          label: {
            style: {
              color: "#B51AD8", // Color para el label
            },
          },
        }}
      />

      {/* Agregar un selector para elegir el área */}
      <FormControl fullWidth>
        <InputLabel id="area-label" style={{ color: "#B51AD8" }}>Área</InputLabel>
        <Select
          labelId="area-label"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          label="Área"
          sx={{
            backgroundColor: "#ffffff",
            color: "#000000",
            "& .MuiInputBase-input": {
              backgroundColor: "#ffffff",
            },
          }}
        >
          <MenuItem value="articulos_importantes">Articulos importantes</MenuItem>
          <MenuItem value="marketing">Marketing</MenuItem>
          <MenuItem value="area_comercial">Area Comercial</MenuItem>
          <MenuItem value="tecnologia">Tecnología</MenuItem>
          {/* Puedes agregar más áreas según tus necesidades */}
        </Select>
      </FormControl>

      <Button
        component="label"
        className="hover-button"
        sx={{
          padding: "10px 20px",
          backgroundColor: "#ECEAEF",
          color: "#B51AD8",
          borderRadius: "10px",
          fontWeight: "bold",
          fontSize: "16px",
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease, color 0.3s ease, transform 0.3s ease",
          "&:hover": {
            backgroundColor: "#7311bb",
            color: "#ECEAEF",
            transform: "translateY(-2px)",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Seleccionar Imagen
        <input type="file" hidden onChange={handleImageUpload} />
        <ArrowForwardIcon
          sx={{
            fontSize: "20px",
            marginLeft: "8px",
            transform: "rotate(320deg)",
            transition: "color 0.1s ease",
            color: "inherit",
          }}
        />
      </Button>

      {image && (
        <Typography variant="body1" color="black">
          Imagen seleccionada: {image.name}
        </Typography>
      )}

      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}

      {success && (
        <Typography variant="body2" color="primary">
          Artículo publicado con éxito.
        </Typography>
      )}

      <Button
        component="label"
        className="hover-button"
        onClick={handleSubmit}
        disabled={loading}
        sx={{
          padding: "10px 20px",
          backgroundColor: "#ECEAEF",
          color: "#B51AD8",
          borderRadius: "10px",
          fontWeight: "bold",
          fontSize: "16px",
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease, color 0.3s ease, transform 0.3s ease",
          "&:hover": {
            backgroundColor: "#7311bb",
            color: "#ECEAEF",
            transform: "translateY(-2px)",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading ? "Publicando..." : "Publicar Artículo"}
      </Button>
    </Box>
  );
};

export default CreateArticle;
