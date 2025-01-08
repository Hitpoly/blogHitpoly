import React from "react";
import IndexSection from "../../components/article/IndexSection";
import DownloadIcon from "@mui/icons-material/Download";

const AppIndexSectionArticle = () => {
  const handleButtonClick = () => {
    alert("¡Guía descargada!");
  };

  return (
    <>
      {/* Caso 1 */}
      <IndexSection
        breadcrumb="Blog > Marketing > Marketing B2B"
        title="Marketing B2B: concepto, estrategias y ejemplos"
        description="¿Te gustaría saber cómo aplicar una estrategia de Marketing ganadora de empresa a empresa en 2025?"
        buttonText="Descargar guía estrategia de marketing"
        buttonIcon={<DownloadIcon />}
        onButtonClick={handleButtonClick}
        backgroundImage="/images/estrategiasDeCrecimiento.jpg"
        contentText="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto... Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto... v vLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto... Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto... Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto... v Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto..."
      />
    </>
  );
};

export default AppIndexSectionArticle;
