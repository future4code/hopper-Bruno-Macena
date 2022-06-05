import React from "react";
import axios from 'axios';

export default class AddPlaylist extends React.Component{

    state = {
        nome: ""
    }

    VisualizarPlaylist = (event) => {
        this.setState({nome: event.target.value})
    }

    cadastrarPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            "name": this.state.nome
        }
        axios.post(url, body, {
            headers: {
            Authorization: "bruno-macena-hopper"
            }
        }).then(() => {
            alert("Playlist criada com sucesso.")
        }).catch(() => {
            alert("Tente novamente")
        }).finally(() => {
            this.setState({nome: ""})
        })
}

    render() {
        return (
            <div>
                <button onClick={this.props.mainOne}> VisualizarPlaylist</button>
                <h2>Adicionar Playlist</h2>
                <input placeholder="Criar Nova Playlist" value={this.state.nome} onChange={this.VisualizarPlaylist}/>
                <button onClick={this.cadastrarPlaylist}>Adicionar</button>
                </div>
        )

    }
} 