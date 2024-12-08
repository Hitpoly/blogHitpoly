import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AccordionFooter from "./acordeonMobile/acordeon";

const iconStyles = [
  {
    icon: <InstagramIcon />,
    backgroundColor: "#B51AD8",
    link: "https://www.instagram.com/hitpoly/",
  },
  {
    icon: <FacebookIcon />,
    backgroundColor: "#B51AD8",
    link: "https://www.facebook.com/Hitpoly",
  },
  {
    icon: <LinkedInIcon />,
    backgroundColor: "#B51AD8",
    link: "https://pe.linkedin.com/company/hitpoly",
  },
  {
    icon: <WhatsAppIcon />,
    backgroundColor: "#B51AD8",
    link: "https://wa.me/51933961352",
  },
  {
    icon: <YouTubeIcon />,
    backgroundColor: "#B51AD8",
    link: "https://www.youtube.com/@hitpolyagenciademarketingd5365",
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        display: "flex",
        flexDirection: "column",
        padding: { xs: "40px 20px", sm: "40px 150px" },
        paddingBottom: { xs: "0px", sm: "0px" },
        paddingTop: { sm: "10px" },
        marginTop: "40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alingItem: "center",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "30%",
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
            },
          }}
        >
          <img
            src="/images/logo-hitpoly.png"
            alt="Hitpoly Logo"
            style={{ width: "150px", height: "40px", marginBottom: "10px" }}
          />

          <Typography
            variant="body1"
            sx={{
              width: "90%",
              fontSize: "1rem",
              color: "#555",
              lineHeight: "1.6",
              marginBottom: "15px",
            }}
          >
            En cada acción que emprendemos, buscamos transformar industrias,
            cambiar vidas y construir un mundo mejor. Lideramos la Revolución de
            Marketing y tecnología de Software con Propósito y Pasión.
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "70%" },
            display: { xs: "none", sm: "flex" },
            marginTop: "10px",
          }}
        >
          <Box sx={{ width: "33%" }}>
            <Typography
              sx={{ fontSize: { xs: "0.9rem", md: "0.9rem" } }}
              variant="body1"
              color="#0B8DB5"
              gutterBottom
            >
              ENLACES RÁPIDOS
            </Typography>
            <Link
              href="/"
              color="#211E26"
              underline="none"
              display="block"
              sx={{
                marginBottom: "10px",
                fontSize: "1rem",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              color="#211E26"
              underline="none"
              display="block"
              sx={{
                marginBottom: "10px",
                fontSize: "1rem",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Portafolio
            </Link>
            <Link
              href=""
              color="#211E26"
              underline="none"
              display="block"
              sx={{
                marginBottom: "10px",
                fontSize: "1rem",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Blog
            </Link>
            <Link
              href="/nosotros"
              color="#211E26"
              underline="none"
              display="block"
              sx={{
                marginBottom: "10px",
                fontSize: "1rem",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Nosotros
            </Link>
            <Link
              href="/contact"
              color="#211E26"
              underline="none"
              display="block"
              sx={{
                marginBottom: "10px",
                fontSize: "1rem",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Contacto
            </Link>
          </Box>

          <Box sx={{ width: "33%" }}>
            <Typography
              sx={{ fontSize: { xs: "0.9rem", md: "0.9rem" } }}
              variant="body1"
              color="#0B8DB5"
              gutterBottom
            >
              POLITICAS
            </Typography>
            <Link
              href="/privacypolicy"
              color="#211E26"
              underline="none"
              display="block"
              sx={{
                marginBottom: "10px",
                fontSize: "1rem",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Politicas de privacidad
            </Link>
            <Link
              href="/disclaimer"
              color="#211E26"
              underline="none"
              display="block"
              sx={{
                marginBottom: "10px",
                fontSize: "1rem",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Descargo de responsabilidad
            </Link>
            <Link
              href="/termsandconditions"
              color="#211E26"
              underline="none"
              display="block"
              sx={{
                marginBottom: "10px",
                fontSize: "1rem",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Terminos y condiciones
            </Link>
            <Link
              href="/Copyright"
              color="#211E26"
              underline="none"
              display="block"
              sx={{
                marginBottom: "10px",
                fontSize: "1rem",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              Copyright
            </Link>
          </Box>

          <Box sx={{ width: "34%" }}>
            <Typography
              sx={{ fontSize: { xs: "0.9rem", md: "0.9rem" } }}
              variant="body1"
              color="#0B8DB5"
              gutterBottom
            >
              CONTACTOS
            </Typography>
            <Link
              href="https://wa.me/51933961352" // Cambia esto a tu enlace de WhatsApp
              underline="none" // Elimina la decoración del enlace
              color="inherit" // Hereda el color del texto
              sx={{
                marginBottom: "10px",
                fontSize: { xs: "0.9rem", md: "0.8rem" },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "10px",
                  fontSize: "1rem",
                  color: "#555",
                  lineHeight: "1.6",
                }}
              >
                +51933961352
              </Typography>
            </Link>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@hitpoly.com" // Enlace para abrir Gmail con un nuevo mensaje
              target="_blank" // Abre en una nueva pestaña
              underline="none" // Elimina la decoración del enlace
              color="inherit" // Hereda el color del texto
            >
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "10px",
                  fontSize: "1rem",
                  color: "#555",
                  lineHeight: "1.6",
                }}
              >
                info@hitpoly.com
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: { sm: "none", marginTop: "20px" } }}>
        <AccordionFooter />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          borderTop: "1px solid #1ECDF4",
          width: "100%",
          margin: "35px auto",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "30px",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#F21C63",
            fontSize: "1rem",
              color: "#555",
              lineHeight: "1.6",
            textAlign: { xs: "center", md: "center" },
          }}
        >
          Copyright © 2024 hitpoly.com | Funciona con hitpoly.com
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: { xs: "30px", sm: "0px" },
            gap: { xs: 2, md: 2 },
          }}
        >
          {iconStyles.map(({ icon, backgroundColor, link }, index) => (
            <Link
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: "inline-block", lineHeight: 0 }}
            >
              <IconButton
                sx={{
                  backgroundColor: "#F21C63",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#bf0a46",
                    opacity: 0.8,
                  },
                  width: 36,
                  height: 36,
                  borderRadius: "8px",
                }}
              >
                {icon}
              </IconButton>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
