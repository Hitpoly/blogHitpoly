import React from "react";
import CustomComponent from "../../components/article/CustomComponent";


const AppCustomComponent = () => {
  const listItems = [
    ["Punto uno de la lista", "Punto dos de la lista"],
    ["Punto tres de la lista", "Punto cuatro de la lista"],
  ];

  return (
    <CustomComponent
      imageSrc="/images/estrategiasDeCrecimiento.jpg"
      textColor="#ffffff"
      imageBackground="#cccccc"
      title="Bienvenido a nuestro servicio"
      description="Descubre todo lo que tenemos para ofrecerte con nuestra guía."
      listItems={listItems}
      buttonPrimaryText="Descargar ahora"
      buttonPrimaryAction={() => alert("Descarga iniciada")}
      buttonSecondaryText="Más información"
      buttonSecondaryAction={() => alert("Navegando a más información")}
    />
  );
};

export default AppCustomComponent;
