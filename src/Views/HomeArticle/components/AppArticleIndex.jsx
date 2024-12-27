import React from "react";
import ArticleIndex from "../../components/article/ArticleIndex";

const AppArticleIndex = () => {
  const items = [
    " Introducción al tema Introducción al tema Introducción al tema Introducción al tema Introducción al tema Introducción al tema",
    "Punto clave 1 Punto clave 1 Punto clave 1 Punto clave 1 Punto clave 1 Punto clave 1 Punto clave 1 Punto clave 1",
    "Punto clave 2 Punto clave 2 Punto clave 2 Punto clave 2 Punto clave 02 Punto clave 2 Punto clave 2 Punto clave 2",
    "Conclusión Conclusión Conclusión Conclusión Conclusión Conclusión Conclusión Conclusión Conclusión Conclusión",
  ];

  return (
    
      <ArticleIndex
        title="Tabla de contenidos"
        items={items}
        boxStyles={{ backgroundColor: "#f0f0f0" }}
        listStyles={{ fontSize: "1rem" }}
      />
    
  );
};

export default AppArticleIndex;
