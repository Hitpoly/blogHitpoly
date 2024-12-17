import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import { Typography, Modal, Box, Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../../../src/services/authServices"; 
import { signin } from "../../../reducers/user/userSlice";

const fontFamily = "Inter";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Campo requerido"),
  password: Yup.string().required("Campo requerido"),
});

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
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (values) => {
    try {
      const data = await authService.signin(values.email, values.password);
  
      if (data.status === "success") {
        dispatch(signin(data));
        navigate("/DashboardBlog");
      } else {
        setModalMessage("El correo electrónico o la contraseña son incorrectos.");
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setModalMessage("No se pudo conectar con el servidor. Asegúrate de que el backend esté en funcionamiento.");
      setShowModal(true);
    }
  };  

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box width="400px">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values, handleChange, handleBlur, isSubmitting }) => (
            <Form>
              <Box textAlign="center" py={2}>
                <Title  >INICIAR SESIÓN</Title>
                <SubTitle>La tecnología conectada con la ciencia</SubTitle>
              </Box>

              <Box mb={5}>
                <TextField
                  fullWidth
                  label="Usuario"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  style={{ height: "50px" }}
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
                {loading ? "Cargando..." : "Ingresar a mi cuenta"}
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

        <Modal
          open={showModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={modalStyle}>
            <Typography id="modal-title" variant="h6" component="h2">
              Error de autenticación
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              {modalMessage}
            </Typography>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default LoginForm;
