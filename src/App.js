import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importamos los elementos necesarios para las rutas
import Home from "./Views/Home/page"; // Tu componente Home
import MenuDeNavegacion from "./Views/components/navbar/navbar"; // Tu componente de menú

function App() {
  return (
    <Router>
      <MenuDeNavegacion />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
