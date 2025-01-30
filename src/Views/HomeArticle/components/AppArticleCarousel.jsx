import React from "react";
import ArticleCarousel from "../../components/article/ArticleCarousel";

const AppArticleCarousel = () => {
  const articles = [
    {
      title: "Qué es un pipeline de ventas y cómo crearlo (+ plantilla)",
      description:
        "Al aplicar cada uno de estos componentes en un problema o proyecto...",
      image: "https://via.placeholder.com/300x140", // Reemplaza con una URL real
    },
    {
      title: "5 consejos para mejorar tu estrategia de marketing",
      description: "Descubre cómo optimizar tus campañas con estos consejos.",
      image: "https://via.placeholder.com/300x140",
    },
    {
      title: "La importancia de la analítica web en tu negocio",
      description:
        "Conoce las métricas clave que te ayudarán a tomar decisiones.",
      image: "https://via.placeholder.com/300x140",
    },
  ];

  return (
    <div>
      <ArticleCarousel
        title="Artículos relacionados"
        articles={articles}
      />
    </div>
  );
};

export default AppArticleCarousel;
