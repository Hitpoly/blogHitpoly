import React from "react";
import ArticleContent from "../../components/article/ArticleContent";

const AppArticleContent = () => {
  const sections = [
    {
      title: "Mayor alcance y visibilidad",
      content:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.. v  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500..  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500..",
    },
    {
      title: "Interacción y compromiso directo con la audiencia",
      content:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500..  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500..  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.. v.",
    },
    {
      title: "Promoción y publicidad efectiva",
      content:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500...  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500..  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500..  Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500..",
    },
  ];

  return (    
      <ArticleContent
        mainTitle="Explora los beneficios de este contenido:"
        sections={sections}
        videoSrc="/video/creaUnNegocioDigitalDesdeCero.mp4"
        containerStyles={{ backgroundColor: "#f9f9f9" }}
        videoStyles={{ backgroundColor: "#e0e0e0" }}
      />    
  );
};

export default AppArticleContent;
