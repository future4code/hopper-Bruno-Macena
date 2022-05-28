import axios from "axios";
import React from "react";

export default class Playlist extends React.Component{

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarPlaylist()
    }

    pegarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "bruno-macena-hopper"
            }
        }).then((res) => {
            this.setState({ usuarios: res.data})
        }).catch((err) => {
            console.log(err.response)
        })
    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "bruno-macena-hopper"
            }
        }).then(() => {
            alert("Playlist deletada com sucesso")
            this.pegarPlaylist()
        }).catch(() => {
            alert("Tente novamente")
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.props.filhoDois}> VisualizarPlaylist</button>
                <h2> Playlist</h2>    
                {
                    this.state.usuarios.map((usuario) => {
                        return (
                            <ul key={usuario.id}>
                                <li>{usuario.name}</li>
                                <button onClick={() => this.deletarPlaylist(usuario.id)}>Deletar</button>
                            </ul>
                        )

                    })
                }
            </div>
        )

    }
} 