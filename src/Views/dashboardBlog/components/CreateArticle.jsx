import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateArticle = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // URL de la imagen de portada
  const [additionalImages, setAdditionalImages] = useState([]); // Array para imágenes adicionales
  const [area, setArea] = useState("");
  const [contentBlocks, setContentBlocks] = useState([]); // Arreglo para los bloques de contenido (texto o imagen)
  const [uploadingImage, setUploadingImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const cancelTokenSource = useRef(null);
  const [author, setAuthor] = useState(""); 

  // Función para subir una imagen a Cloudinary
  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploadingImage(true);
      const source = axios.CancelToken.source();
      cancelTokenSource.current = source;

      const response = await axios.post(
        "https://apinewblog.hitpoly.com/ajax/cloudinary.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          cancelToken: source.token,
        }
      );

      if (response.data.url) {
        return response.data.url;
      } else {
        throw new Error("Error obteniendo la URL de la imagen");
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Petición cancelada:", error.message);
      } else {
        console.error("Error al subir la imagen:", error);
        setError("Error al subir la imagen");
      }
      return null;
    } finally {
      setUploadingImage(false);
      cancelTokenSource.current = null;
    }
  };

  // Función para agregar un bloque de texto
  const addTextBlock = () => {
    setContentBlocks([...contentBlocks, { type: "text", content: "", textType: "paragraph" }]);
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

  // Función para manejar la carga de imágenes en los bloques de imagen
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

  // Función para manejar la carga de imágenes adicionales
  const handleAdditionalImageUpload = async (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newImages = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const uploadedUrl = await uploadImageToCloudinary(file);
        if (uploadedUrl) {
          newImages.push(uploadedUrl);
        }
      }
      setAdditionalImages([...additionalImages, ...newImages]);
    }
  };

  // Función para eliminar un bloque de contenido
  const handleDeleteBlock = (index) => {
    const updatedBlocks = contentBlocks.filter((_, i) => i !== index);
    setContentBlocks(updatedBlocks);
  };

  // Función para eliminar una imagen adicional
  const handleDeleteAdditionalImage = (index) => {
    const updatedImages = additionalImages.filter((_, i) => i !== index);
    setAdditionalImages(updatedImages);
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

    // Dividir los bloques de contenido en subtítulos y párrafos
    const subtitles = contentBlocks.filter(block => block.textType === "subtitle");
    const paragraphs = contentBlocks.filter(block => block.textType === "paragraph");

    try {
      const postData = {
        accion: 2,
        title,
        area,
        author,
        image_url: imageUrl,
        subtitles, // Enviar los subtítulos
        paragraphs, // Enviar los párrafos
        additional_images: additionalImages, // Enviar las imágenes adicionales
      };

      const response = await axios.post(
        "https://apinewblog.hitpoly.com/ajax/crearArticuloController.php",
        postData
      );

      if (response.data.resultado === "ok") {
        setSuccess(true);
        setTitle("");
        setArea("");
        setAuthor("");
        setImageUrl("");
        setContentBlocks([]);
        setAdditionalImages([]);
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
         <TextField
        label="Autor"
        variant="outlined"
        color="secondary"
        fullWidth
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
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
                {/* Botón para eliminar el bloque de texto */}
                <Button onClick={() => handleDeleteBlock(index)} sx={{ color: "red", paddingLeft: "8px" }}>
                  <DeleteIcon />
                </Button>
              </Box>
            )}

            {block.type === "image" && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button component="label" sx={{ backgroundColor: "#ECEAEF", color: "#B51AD8", fontWeight: "bold" }}>
                  Seleccionar Imagen
                  <input type="file" hidden onChange={(e) => handleImageUpload(index, e)} />
                  <ArrowForwardIcon sx={{ marginLeft: "8px" }} />
                </Button>
                {/* Botón para eliminar la imagen */}
                <Button onClick={() => handleDeleteBlock(index)} sx={{ color: "red", paddingLeft: "8px" }}>
                  <DeleteIcon />
                </Button>
              </Box>
            )}
          </Box>
        ))}
      </Box>

      {/* Botones para agregar bloques de texto o imagen */}
      <Button onClick={addTextBlock} sx={{ backgroundColor: "#ECEAEF", color: "#B51AD8", fontWeight: "bold" }}>
        Agregar Bloque de Texto
      </Button>


      {/* Subir imágenes adicionales */}
      <Button component="label" sx={{ backgroundColor: "#ECEAEF", color: "#B51AD8", fontWeight: "bold" }}>
        Cargar Imágenes al articulo
        <input type="file" hidden multiple onChange={handleAdditionalImageUpload} />
        <ArrowForwardIcon sx={{ marginLeft: "8px" }} />
      </Button>

      {/* Mostrar las imágenes cargadas */}
      <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
        {additionalImages.map((url, index) => (
          <Box key={index}>
            <img src={url} alt={`Imagen ${index + 1}`} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
            <Button onClick={() => handleDeleteAdditionalImage(index)} sx={{ color: "red", paddingLeft: "8px" }}>
              <DeleteIcon />
            </Button>
          </Box>
        ))}
      </Box>

      {/* Mostrar el mensaje de error */}
      {error && <Typography color="red">{error}</Typography>}

      {/* Mostrar el mensaje de éxito */}
      {success && <Typography color="green">Artículo creado exitosamente!</Typography>}

      {/* Botón para enviar */}
      <Button
        onClick={handleSubmit}
        sx={{
          backgroundColor: "#B51AD8",
          color: "white",
          fontWeight: "bold",
          marginTop: 3,
        }}
        disabled={loading}
      >
        {loading ? "Cargando..." : "Crear Artículo"}
      </Button>
    </Box>
  );
};

export default CreateArticle;
