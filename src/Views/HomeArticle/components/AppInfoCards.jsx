import React from "react";
import { Container } from "@mui/material";
import SectionCard from "../../components/article/SectionCardArticle";

const AppInfoCards = () => {
  const sections = [
    {
      title: "Promoción de pequeñas empresas",
      subtitle: "Frank Body",
      description:
        "Lorem ipsum es simplemente el texto de relleno de las imprentas y archivos de texto... Lorem ipsum es simplemente el texto de relleno de las imprentas y archivos de texto... Lorem ipsum es simplemente el texto de relleno de las imprentas y archivos de texto... Lorem ipsum es simplemente el texto de relleno de las imprentas y archivos de texto...",
      imageAlt: "Frank Body promotional image",
      imageSrc: "/images/estrategiasDeCrecimiento.jpg",
    },
    {
      title: "Networking profesional",
      subtitle: "LinkedIn",
      description:
        "Lorem ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500... Lorem ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500... Lorem ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500... Lorem ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500...",
      imageAlt: "LinkedIn logo",
      imageSrc: "/images/estrategiasDeCrecimiento.jpg",
    },
    {
      title: "Marketing digital",
      subtitle: "Google Ads",
      description:
        "Google Ads es una herramienta poderosa para llegar a clientes potenciales... Google Ads es una herramienta poderosa para llegar a clientes potenciales... Google Ads es una herramienta poderosa para llegar a clientes potenciales... Google Ads es una herramienta poderosa para llegar a clientes potenciales...",
      imageAlt: "Google Ads logo",
      imageSrc: "/images/estrategiasDeCrecimiento.jpg",
    },    
  ];

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      {sections.map((section, index) => (
        <SectionCard
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          description={section.description}
          imageAlt={section.imageAlt}
          imageSrc={section.imageSrc}
        />
      ))}
    </Container>
  );
};

export default AppInfoCards;
