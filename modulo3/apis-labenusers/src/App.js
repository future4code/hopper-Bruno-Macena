import React from 'react';
import axios from 'axios';
import TelaCadastro from './components/TelaCadastro';
import TelaLista from './components/TelaLista';


class App extends React.Component {
  state = {
  telaAtual: "cadastro"
    
}

  trocardeTela = () => {
    this.setState({
      telaAtual: this.state.telaAtual === "cadastro"
      ? "lista"
        : "cadastro"
      })
  }


  render() {
    return (
      <div> 
        {
          this.state.telaAtual === "cadastro"
            ? <TelaCadastro filhoUm={this.trocardeTela} />
            : <TelaLista filhoDois={this.trocardeTela} />
        }
      </div>
    )
  }
}

export default App;