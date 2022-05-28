import React from 'react';
import axios from 'axios';
import AddTrack from './components/AddPlaylist';
import AddPlaylist from './components/AddPlaylist';
import styledComponents from 'styled-components';


class App extends React.Component {
  state = {
  telaAtual: "cadastro"

}

  VisualizarPlaylist = () => {
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
            ? <AddTrack filhoUm={this.VisualizarPlaylist} />
            : <AddPlaylist filhoDois={this.VisualizarPlaylist} />
        }
      </div>
    )
  }
}

export default App; 