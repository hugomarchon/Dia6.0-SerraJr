import React from "react";
import "../index.css";

export default (props) => {
  const { nome, tempo, categoria } = props;

  return (
    <div className="card">
      <div className="card-title">
        <b>{nome}</b>
      </div>

      <div className="card-body">
        <p>
          <b>{tempo}</b>
        </p>
        <p>
          <b>{categoria}</b>
        </p>
      </div>
    </div>
  );
};
