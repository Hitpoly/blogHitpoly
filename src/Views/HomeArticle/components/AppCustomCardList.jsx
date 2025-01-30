import React from "react";
import CustomCardList from "../../components/article/CustomCardList";

const AppCustomCardList = () => {
  const cardContents = [
    "Contenido de la primera tarjeta.",
    "Contenido de la segunda tarjeta.",
    "Contenido de la tercera tarjeta.",
    "Contenido de la cuarta tarjeta.",
  ];

  return (
    <div>
      <CustomCardList
        logoSrc="/images/logo-hitpoly.png"
        logoAlt="Custom Logo"
        cards={cardContents}        
        cardStyles={{
          backgroundColor: "#f0f0f0",
        }}
        cardTextStyles={{
          color: "#000",
        }}
      />
    </div>
  );
};

export default AppCustomCardList;
