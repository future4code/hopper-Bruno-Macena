import React from "react";

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Etapa 1 - Dados Gerais</h2>
        <p>1. Qual o seu nome ?</p>
        <input></input>
        <p>2. Qual a sua idade ?</p>
        <input></input>
        <p>3. Qual o seu e-mail ?</p>
        <input></input>
        <p>4. Qual a sua escolaridade ?</p>
        <select>
          <option></option>
          <option value="Ensino médio incompleto">Ensino médio incompleto</option>
          <option value="Ensino médio completo">Ensino médio completo</option>
          <option value="Ensino superior incompleto">Ensino superior incompleto</option>
          <option value="Ensino superior completo">Ensino superior completo</option>
        </select>
      </div>

    );
  }
}

export default Etapa1;