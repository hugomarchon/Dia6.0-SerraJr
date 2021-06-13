import React from "react";
import "../index.css";

// Classe Geral Cria os Inputs, o Botão e os Cards dinâmicos
class Card extends React.Component {
  constructor(props) {
    super(props);
    //Inicia os componentes de estado
    this.state = {
      Input_nome: "",
      Input_tempo: "",
      Input_categoria: "",
      Submit: [],
    };
    this.setNome = this.setNome.bind(this);
    this.setTime = this.setTime.bind(this);
    this.setCategoria = this.setCategoria.bind(this);
    this.setSubmit = this.setSubmit.bind(this);
    this.Delete_Card = this.setSubmit.bind(this);
  }
  //Trata o Input do nome
  setNome(event) {
    this.setState({
      Input_nome: event.target.value,
    });
  }
  //Trata o Input do Tempo
  setTime(event) {
    this.setState({
      Input_tempo: event.target.value,
    });
  }
  //Trata o Input da Categoria
  setCategoria(event) {
    this.setState({
      Input_categoria: event.target.value,
    });
  }

  //Trata o Envio do Cadastro da Receita
  setSubmit(event) {
    event.preventDefault(); //Impede que o Formulario seja enviado (tipo submit)

    //Objeto com as informações de cada input
    const cardsInfo = {
      Input_nome: this.state.Input_nome,
      Input_tempo: this.state.Input_tempo,
      Input_categoria: this.state.Input_categoria,
    };

    if (
      cardsInfo.Input_nome == "" ||
      cardsInfo.Input_tempo == "" ||
      cardsInfo.Input_categoria == ""
    ) {
      alert("Não crie uma receita com dados vazios");
      return;
    }

    //Inserir o objeto no Array e limpa para proxima entrada (no código)
    this.setState((state) => ({
      Submit: state.Submit.concat(cardsInfo),
      Input_nome: "",
      Input_tempo: "",
      Input_categoria: "",
    }));
    //Limpa Inputs depois de Cadastrar (na pagina)
    let clean = document.getElementsByClassName("input");
    clean[0].value = "";
    clean[1].value = "";
    clean[2].value = "";
  }

  render() {
    //Cria o card de fato com as informações dos Inputs
    const cardInfo = this.state.Submit.map((card, index) => {
      return (
        <div className="card">
          <button
            className="deletebutton"
            type=""
            onClick={() =>
              this.state.Submit.splice(index, 1) &&
              this.setState((state) => ({}))
            }
          ></button>
          <div className="card-title">
            <b>{card.Input_nome}</b>
          </div>
          <div className="card-body">
            <p>
              <b>{card.Input_tempo}</b>
            </p>
            <p>
              <b>{card.Input_categoria}</b>
            </p>
          </div>
        </div>
      );
    });

    return (
      //Cria os inputs e o botão adicionando abaixo o card quando o usuário der submit

      <div class="page">
        <input className="input" onChange={this.setNome} placeholder="Nome" />
        <input
          className="input"
          onChange={this.setTime}
          placeholder="Tempo de Preparo"
        />
        <input
          className="input"
          onChange={this.setCategoria}
          placeholder="Categoria"
        />
        <button className="button" type="submit" onClick={this.setSubmit}>
          Adicionar
        </button>

        <div className="card-div">{cardInfo}</div>
      </div>
    );
  }
}

export default Card;
