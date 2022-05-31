import axios from "axios";
import React from "react";

export default class TelaLista extends React.Component{

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
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

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "bruno-macena-hopper"
            }
        }).then(() => {
            alert("Usuário deletado com sucesso")
            this.pegarUsuarios()
        }).catch(() => {
            alert("Tente novamente")
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.props.filhoDois}> trocar de tela</button>
                <h2> Tela Lista</h2>    
                {
                    this.state.usuarios.map((usuario) => {
                        return (
                            <ul key={usuario.id}>
                                <li>{usuario.name}</li>
                                <button onClick={() => this.deletarUsuario(usuario.id)}>Deletar</button>
                            </ul>
                        )
                    
                    })
                }
            </div>
        )

    }
}