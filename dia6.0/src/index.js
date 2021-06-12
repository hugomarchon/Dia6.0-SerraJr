import React from "react";
import ReactDOM from "react-dom";
import Cabecalho from "./Componentes/Cabecalho";
import Rodape from "./Componentes/Rodape";
import CriarCard from "./Componentes/CriarCard";

ReactDOM.render(
  <div>
    <Cabecalho></Cabecalho>
    <div className="input-container">
      <div className="page-title">Receitas</div>
      <input className="input" placeholder="Nome"></input>
      <input className="input" placeholder="Tempo de Preparo"></input>
      <input className="input" placeholder="Categoria"></input>
      <CriarCard></CriarCard>
    </div>

    <Rodape></Rodape>
  </div>,

  document.getElementById("root")
);
