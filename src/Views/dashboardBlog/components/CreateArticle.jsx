import React, { useState } from "react";
import { Box, Button, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // URL de la imagen de portada
  const [area, setArea] = useState("");
  const [contentBlocks, setContentBlocks] = useState([]); // Arreglo para los bloques de contenido (texto o imagen)
  const [uploadingImage, setUploadingImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Función para subir una imagen a Cloudinary
  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploadingImage(true);

      const response = await axios.post(
        "https://apiblog.hitpoly.com/ajax/cloudinary.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // const response = await axios.post(
      //   "http://localhost/bloghitpoly/ajax/cloudinary.php",
      //   formData,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );

      if (response.data.url) {
        return response.data.url;
      } else {
        throw new Error("Error obteniendo la URL de la imagen");
      }
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      setError("Error al subir la imagen");
      return null;
    } finally {
      setUploadingImage(false);
    }
  };

  // Función para agregar un bloque de texto
  const addTextBlock = () => {
    setContentBlocks([...contentBlocks, { type: "text", content: "", textType: "paragraph" }]);
  };

  // Función para agregar un bloque de imagen
  const addImageBlock = () => {
    setContentBlocks([...contentBlocks, { type: "image", url: "" }]);
  };

  // Función para manejar el cambio en los bloques de texto
  const handleTextChange = (index, newText) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index].content = newText;
    setContentBlocks(updatedBlocks);
  };

  // Función para manejar el cambio del tipo de texto (Subtítulo / Párrafo)
  const handleTextTypeChange = (index, newType) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index].textType = newType;
    setContentBlocks(updatedBlocks);
  };

  // Función para manejar el cambio en las URLs de las imágenes
  const handleImageUpload = async (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const uploadedUrl = await uploadImageToCloudinary(file);
      if (uploadedUrl) {
        const updatedBlocks = [...contentBlocks];
        updatedBlocks[index].url = uploadedUrl;
        setContentBlocks(updatedBlocks);
      }
    }
  };

  // Enviar artículo al backend
  const handleSubmit = async () => {
    if (!title || !area || !imageUrl || contentBlocks.length === 0) {
      setError("Por favor, completa todos los campos y añade contenido.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const postData = {
        accion:2,
        title,
        area,
        image_url: imageUrl,
        content_blocks: contentBlocks, // Enviar todos los bloques de contenido
      };

      const response = await axios.post(
        "https://apiblog.hitpoly.com/ajax/crearArticuloController.php",
        postData
      );

      // const response = await axios.post(
      //   "http://localhost/bloghitpoly/ajax/crearArticuloController.php",
      //   postData
      // );

      if (response.data.resultado === "ok") {
        setSuccess(true);
        setTitle("");
        setArea("");
        setImageUrl("");
        setContentBlocks([]);
      } else {
        setError("Error al crear el artículo.");
      }
    } catch (error) {
      setError("Error al crear el artículo: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 500, margin: "0 auto", p: 3 }}>
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
      />

      {/* Seleccionar área */}
      <FormControl fullWidth>
        <InputLabel id="area-label" style={{ color: "#B51AD8" }}>
          Área
        </InputLabel>
        <Select labelId="area-label" value={area} onChange={(e) => setArea(e.target.value)} label="Área">
          <MenuItem value="articulos_importantes">Artículos importantes</MenuItem>
          <MenuItem value="marketing">Marketing</MenuItem>
          <MenuItem value="ventas">Área Comercial</MenuItem>
          <MenuItem value="tecnologia">Tecnología</MenuItem>
        </Select>
      </FormControl>

      {/* Cargar imagen de portada */}
      <Button component="label" sx={{ backgroundColor: "#ECEAEF", color: "#B51AD8", fontWeight: "bold" }}>
        Seleccionar Imagen de Portada
        <input type="file" hidden onChange={async (e) => {
          const file = e.target.files[0];
          const uploadedUrl = await uploadImageToCloudinary(file);
          if (uploadedUrl) setImageUrl(uploadedUrl);
        }} />
        <ArrowForwardIcon sx={{ marginLeft: "8px" }} />
      </Button>

      {/* Contenido del artículo: bloques de texto y de imagen */}
      <Box>
        {contentBlocks.map((block, index) => (
          <Box key={index}>
            {block.type === "text" && (
              <Box>
                <FormControl fullWidth>
                  <InputLabel id={`text-type-label-${index}`} style={{ color: "#B51AD8" }}>
                    Tipo de Bloque
                  </InputLabel>
                  <Select
                    labelId={`text-type-label-${index}`}
                    value={block.textType}
                    onChange={(e) => handleTextTypeChange(index, e.target.value)}
                    label="Tipo de Bloque"
                  >
                    <MenuItem value="paragraph">Párrafo</MenuItem>
                    <MenuItem value="subtitle">Subtítulo</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  label={`${block.textType === "subtitle" ? "Subtítulo" : "Párrafo"} ${index + 1}`}
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  multiline
                  rows={4}
                  value={block.content}
                  onChange={(e) => handleTextChange(index, e.target.value)}
                />
              </Box>
            )}

            {block.type === "image" && (
              <Button component="label" sx={{ backgroundColor: "#ECEAEF", color: "#B51AD8", fontWeight: "bold" }}>
                Seleccionar Imagen
                <input type="file" hidden onChange={(e) => handleImageUpload(index, e)} />
                <ArrowForwardIcon sx={{ marginLeft: "8px" }} />
              </Button>
            )}
          </Box>
        ))}
      </Box>

      {/* Botones para agregar bloques de texto o imagen */}
      <Button onClick={addTextBlock} sx={{ backgroundColor: "#ECEAEF", color: "#B51AD8" }}>Añadir Subtítulo/Párrafo</Button>
      <Button onClick={addImageBlock} sx={{ backgroundColor: "#ECEAEF", color: "#B51AD8" }}>Añadir Imagen</Button>

      {uploadingImage && <Typography color="primary">Subiendo imagen...</Typography>}

      {error && <Typography variant="body2" color="error">{error}</Typography>}
      {success && <Typography variant="body2" color="primary">Artículo publicado con éxito.</Typography>}

      <Button onClick={handleSubmit} disabled={loading || uploadingImage} sx={{ backgroundColor: "#ECEAEF", color: "#B51AD8" }}>
        {loading ? "Publicando..." : "Publicar Artículo"}
      </Button>
    </Box>
  );
};

export default CreateArticle;
