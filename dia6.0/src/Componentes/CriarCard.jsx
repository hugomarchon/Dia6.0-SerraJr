import React from "react";
import "../index.css";
import Card from "./Card";

function CriarCard() {
  alert("teste");
  return (
    <div className="card-div">
      <Card nome="Teste" tempo="10s" categoria="comida"></Card>
      <Card nome="Teste" tempo="10s" categoria="comida"></Card>
      <Card nome="Teste" tempo="10s" categoria="comida"></Card>
      <Card nome="Teste" tempo="10s" categoria="comida"></Card>
    </div>
  );
}

function Button() {
  return (
    <button className="button" onClick={() => CriarCard()}>
      Adicionar
    </button>
  );
}

export default Button;
