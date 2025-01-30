import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionFooter = () => {
  // Datos de las secciones y enlaces
  const sections = [
    {
      title: "Enlaces Rápidos",
      links: [
        { text: "Inicio", url: "/" },
        { text: "Portafolio", url: "https://hitpoly.com/portfolio" },
        { text: "Blog", url: "/" },
        { text: "Nosotros", url: "https://hitpoly.com/nosotros" },
        { text: "Contacto", url: "https://hitpoly.com/contact" },
      ],
    },
    {
      title: "Políticas",
      links: [
        { text: "Políticas de privacidad", url: "https://hitpoly.com/privacypolicy" },
        { text: "Descargo de responsabilidad", url: "https://hitpoly.com/disclaimer" },
        { text: "Términos y condiciones", url: "https://hitpoly.com/termsandconditions" },
        { text: "Copyright", url: "https://hitpoly.com/Copyright" },
      ],
    },
    {
      title: "Contacto",
      links: [
        { text: "+51933961352", url: "https://wa.me/51933961352" },
        { text: "info@hitpoly.com", url: "https://mail.google.com/mail/?view=cm&fs=1&to=info@hitpoly.com" },
      ],
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <Accordion
          key={index}
          disableGutters
          elevation={0}
          square
          sx={{
            "&:before": { display: "none" }, // Elimina el borde por defecto de Material-UI
            borderTop: "1px solid #ddd", // Solo borde superior
            borderRadius: 0,
            backgroundColor: "transparent",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{section.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {section.links.map((link, linkIndex) => (
                <ListItem key={linkIndex}>
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                  >
                    <ListItemText primary={link.text} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionFooter;
