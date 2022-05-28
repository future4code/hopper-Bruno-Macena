import React from "react";
import axios from 'axios';
export default class AddPlaylist extends React.Component{

    state = {
        nome: ""
    }

    VisualizarNovaPlaylist = (event) => {
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
        }).catch((err) => {
            alert("Tente novamente")
        }).finally(() => {
            this.setState({nome: ""})
        })
}

    render() {
        return (
            <div>
                <button onClick={this.props.filhoUm}> VisualizarPlaylist</button>
                <h2>AddPlaylist</h2>
                <input placeholder="nome" value={this.state.nome} onChange={this.VisualizarNovaPlaylist}/>
                <button onClick={this.cadastrarPlaylist}>Add</button>
                </div>
        )

    }
} 