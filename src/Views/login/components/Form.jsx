import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import { Typography, Modal, Box, Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../../reducers/user/userSlice";

// Esquema de validación con Yup
const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Campo requerido"),
  password: Yup.string().min(6, "Mínimo 6 caracteres").required("Campo requerido"),
});

// Estilos personalizados
const Title = styled.p({
  fontSize: 38,
  fontWeight: 600,
  color: "#211E26",
  textAlign: "center",
});

const SubTitle = styled.p({
  fontSize: 18,
  textAlign: "center",
  color: "#200E24",
});

const TextGray = styled(Typography)({
  fontSize: 18,
  fontWeight: 400,
  color: "#6b6b6b",
});

const TextGrayBold = styled(Typography)({
  fontSize: 18,
  fontWeight: 700,
  color: "#7E3DD6",
});

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Función para enviar los datos al backend
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch("https://apinewblog.hitpoly.com/ajax/usuarioController.php", {
      // const response = await fetch("http://localhost/bloghitpoly/ajax/usuarioController.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          funcion: "login",  // Enviamos la función como parte del cuerpo
          user: values.username,
          pass: values.password,
        }),
      });
  
      const data = await response.json();
  
      if (data.status === "success") {
        dispatch(signin(data.user));
        navigate("/DashboardBlog");
      } else {
        setModalMessage(data.message || "El usuario o la contraseña son incorrectos.");
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setModalMessage("No se pudo conectar con el servidor. Inténtalo más tarde.");
      setShowModal(true);
    } finally {
      setSubmitting(false);
    }
  };
  

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box width="400px">
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values, handleChange, handleBlur, isSubmitting }) => (
            <Form>
              <Box textAlign="center" py={2}>
                <Title>INICIAR SESIÓN</Title>
                <SubTitle>La tecnología conectada con la ciencia</SubTitle>
              </Box>

              <Box mb={5}>
                <TextField
                  fullWidth
                  label="Usuario"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
              </Box>

              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Contraseña"
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Box>

              <Button
                variant="contained"
                type="submit"
                style={{
                  backgroundColor: "#F21C63",
                  color: "#fff",
                  borderRadius: "6px",
                  height: "55px",
                  width: "100%",
                }}
                disabled={isSubmitting || loading}
              >
                {isSubmitting || loading ? "Cargando..." : "Ingresar a mi cuenta"}
              </Button>

              <Box mt={2} textAlign="center">
                <TextGray>¿No tienes cuenta?</TextGray>
                <Link to="/register" style={{ marginLeft: "10px" }}>
                  <TextGrayBold>Crear cuenta</TextGrayBold>
                </Link>
              </Box>
            </Form>
          )}
        </Formik>

        <Modal open={showModal} onClose={handleCloseModal}>
          <Box sx={modalStyle}>
            <Typography variant="h6" component="h2">
              Error de autenticación
            </Typography>
            <Typography sx={{ mt: 2 }}>{modalMessage}</Typography>
            <Button onClick={handleCloseModal} sx={{ mt: 2 }} variant="contained" color="secondary">
              Cerrar
            </Button>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default LoginForm;
