import React from "react";
import ReactDOM from "react-dom";
import Cabecalho from "./Componentes/Cabecalho";
import Rodape from "./Componentes/Rodape";
import MyCards from "./Componentes/CriarCard";

ReactDOM.render(
  <div>
    <Cabecalho></Cabecalho>
    <div className="input-container">
      <div className="page-title">Receitas</div>
      <MyCards></MyCards>
    </div>
    <Rodape></Rodape>
  </div>,

  document.getElementById("root")
);
