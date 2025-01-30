import React from "react";
import SocialAdvantages from "../../components/article/SocialAdvantages";

const AppSocialAdvantages = () => {
  const advantages = [
    "Mayor alcance y visibilidad.",
    "Interacción directa con la audiencia.",
    "Publicidad efectiva a bajo costo.",
    "Facilidad para medir resultados en tiempo real.",
    "Construcción de una comunidad alrededor de la marca.",
    "Generación de leads y ventas.",
  ];

  return (
      <SocialAdvantages
        title="Beneficios de estar en redes sociales"
        textArray={advantages}
        logoSrc="/images/logo-hitpoly.png"
        logoAlt="Hitpoly Logo"
        containerStyles={{ backgroundColor: "#f9f9f9" }}
        logoStyles={{ width: "120px" }}
        paperStyles={{ backgroundColor: "#f0f0f0" }}
      />
  );
};

export default AppSocialAdvantages;
