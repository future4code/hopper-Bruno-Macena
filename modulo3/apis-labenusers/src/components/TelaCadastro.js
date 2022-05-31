import React from "react";
import axios from 'axios';
export default class TelaCadastro extends React.Component{

    state = {
        nome: "",
        email:""
    }

    olharParaNome = (event) => {
        this.setState({nome: event.target.value})
    }

    olharParaEmail = (event) => {
        this.setState({email: event.target.value})
    }

    cadastrarUsuario = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            "name": this.state.nome,
            "email": this.state.email
        }
        axios.post(url, body, {
            headers: {
            Authorization: "bruno-macena-hopper"
            }
        }).then(() => {
            alert("Usuário cadastrado com sucesso.")
        }).catch((err) => {
            alert("Tente novamente")
        }).finally(() => {
            this.setState({nome: "", email: ""})
        })
}

    render() {
        return (
            <div>
                <button onClick={this.props.filhoUm}> Trocar de Tela</button>
                <h2>Tela Cadastro</h2>
                <input placeholder="nome" value={this.state.nome} onChange={this.olharParaNome}/>
                <input placeholder="email" value={this.state.email} onChange={this.olharParaEmail} />
                <button onClick={this.cadastrarUsuario}>Cadastrar</button>
                </div>
        )

    }
}