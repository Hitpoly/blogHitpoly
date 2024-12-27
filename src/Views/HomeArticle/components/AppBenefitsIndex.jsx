import React from "react";
import BenefitsIndex from "../../components/article/BenefitsIndex";

const AppBenefitsIndex = () => {
  const benefits = [
    "Aumenta la visibilidad de tu marca. Aumenta la visibilidad de tu marca. Aumenta la visibilidad de tu marca. Aumenta la visibilidad de tu marca. ",
    "Mejora el engagement con tu audiencia. Mejora el engagement con tu audiencia. Mejora el engagement con tu audiencia.",
    "Facilita la generación de leads. Facilita la generación de leads.  Facilita la generación de leads.  Facilita la generación de leads. ",
    "Incrementa las conversiones. Incrementa las conversiones. Incrementa las conversiones. Incrementa las conversiones. Incrementa las conversiones.",
    "Fortalece la confianza en la marca. Fortalece la confianza en la marca. Fortalece la confianza en la marca. Fortalece la confianza en la marca.",
  ];

  return (
      <BenefitsIndex
        title="Los 5 beneficios clave de una estrategia de contenidos"
        benefits={benefits}
        imageSrc="/images/MundoHitpoly.png"
        imageAlt="MundoHitpoly"
        cardStyles={{ backgroundColor: "#f8f9fa" }}
        listStyles={{ fontSize: "1rem", textAlign: "start" }}
      />
  );
};

export default AppBenefitsIndex;
