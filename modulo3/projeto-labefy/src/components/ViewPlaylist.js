import axios from "axios";
import React from "react";

export default class ViewPlaylist extends React.Component{

    state = {
        playlist: [],
        InputaddnameTrack: "",
        InputaddartistTrack: "",
        InputaddurlTrack: "",
        InputbuscaPlaylist:""
    }
    componentDidMount() {
        this.mostrarPlaylist()
    }
    mostrarPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        axios.get(url, {
            headers: {
                Authorization: "bruno-macena-hopper"
            }
        }).then((response) => {
            this.setState({playlist: response.data.result.list })
        }).catch((err) => {
            alert(err.response.data)
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
            this.mostrarPlaylist()
        }).catch(() => {
            alert("Tente novamente")
        })
    }
    AddTrack = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            "name": this.state.InputaddnameTrack, 
            "artist": this.state.InputaddartistTrack,
            "url": this.state.InputaddurlTrack
        }
        axios.post(url, body,{
            headers: {
                Authorization: "bruno-macena-hopper"
            }
        }).then(() => {
            alert("Faixa criada com sucesso")
           
        }).catch(() => {
            alert("Tente novamente")
        })
    }

    InputaddnameTrack = (event) => {
        this.setState({InputaddnameTrack: event.target.value })
    }
    InputaddartistTrack = (event) => {
        this.setState({InputaddartistTrack: event.target.value })
    }
    InputaddurlTrack = (event) => {
        this.setState({InputaddurlTrack: event.target.value })
    }
    InputbuscaPlaylist = (event) => {
        this.setState({InputbuscaPlaylist: event.target.value})
    }
    localePlaylist = () => {
        const lista = this.state.playlist.find(list => list.name === this.state.InputbuscaPlaylist)
         this.AddTrack(lista.id)
    }
    render() {
        return (
            <div>
                <button onClick={this.props.mainTwo}> Voltar ao Add Playlist</button>
                <h2> Playlist</h2>    
                {
                    this.state.playlist.map((file) => {
                        return (
                            <ul key={file.id}>
                                <li>{file.name}</li>
                                <button onClick={() => this.deletarPlaylist(file.id)}>Deletar</button>
                            </ul> 
                        )
                    })
                }
                <div>
                <input placeholder="Nome da Playlist" value={this.state.InputbuscaPlaylist} onChange={this.InputbuscaPlaylist} />
                    <input placeholder="Nome da Música" value={this.state.InputaddnameTrack} onChange={this.InputaddnameTrack}/>
                    <input placeholder="Nome do Artista" value={this.state.InputaddartistTrack} onChange={this.InputaddartistTrack} />
                    <input placeholder="Url do arquivo" value={this.state.InputaddurlTrack} onChange={this.InputaddurlTrack} />
                    <button onClick={this.localePlaylist}>Adicionar Faixa</button>
                </div>
            </div>
        )
    }
} 