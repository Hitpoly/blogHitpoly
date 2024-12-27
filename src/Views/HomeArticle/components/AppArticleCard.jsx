import React from "react";
import ArticleCard from "../../components/article/ArticleCard";

const AppArticleCard = () => {
  return (
    <div>
      <ArticleCard
        title="Pinterest: inspiración y tráfico web"
        content="Lorem ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500... Aquí puedes incluir otro contenido personalizado para reutilizar el componente en diferentes contextos. Aquí puedes incluir otro contenido personalizado para reutilizar el componente en diferentes contextos. Aquí puedes incluir otro contenido personalizado para reutilizar el componente en diferentes contextos. Aquí puedes incluir otro contenido personalizado para reutilizar el componente en diferentes contextos. Aquí puedes incluir otro contenido personalizado para reutilizar el componente en diferentes contextos."
        containerStyles={{ marginTop: "20px" }}
        cardStyles={{ backgroundColor: "#f9f9f9" }}
        titleStyles={{ color: "#0073e6" }}
      />
      <ArticleCard
        title="Otro artículo interesante"
        content="Aquí puedes incluir otro contenido personalizado para reutilizar el componente en diferentes contextos. Aquí puedes incluir otro contenido personalizado para reutilizar el componente en diferentes contextos. Aquí puedes incluir otro contenido personalizado para reutilizar el componente en diferentes contextos. vAquí puedes incluir otro contenido personalizado para reutilizar el componente en diferentes contextos. Aquí puedes incluir otro contenido personalizado para reutilizar el componente en diferentes contextos. "
        cardStyles={{ backgroundColor: "#f9f9f9" }}
        titleStyles={{ color: "#0073e6" }}
      />
    </div>
  );
};

export default AppArticleCard;
