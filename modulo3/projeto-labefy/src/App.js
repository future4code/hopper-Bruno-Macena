import React from 'react';
import AddPlaylist from './components/AddPlaylist';
import ViewPlaylist from './components/ViewPlaylist'

class App extends React.Component {
  state = {
    PageState: "Cadastro Playlist"
}

VisualizarPlaylist = () => {
    this.setState({
      PageState: this.state.PageState === "Cadastro Playlist"
      ? "lista"
        : "Cadastro Playlist"
      })
  }

  render() {
    return (
      <div> 
        {
          this.state.PageState === "Cadastro Playlist"
            ? < AddPlaylist mainOne ={this.VisualizarPlaylist}/>
            : < ViewPlaylist mainTwo ={this.VisualizarPlaylist}/>
        }
      </div>
    )
  }
}

export default App; 