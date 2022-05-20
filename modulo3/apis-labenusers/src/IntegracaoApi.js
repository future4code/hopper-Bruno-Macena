import React, { Component } from 'react';
import axios from 'axios';

class integracaoApi extends React.Component {
    state = {

        tabela: [],
        inputCadastro: ''
    }

    componentDidMount() {
        this.mostrarTabela()
    }

    onChangeInput = (event) => {
        this.setState({inputCadastro: event.target.value})
    }
    
    mostrarTabela = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: "bruno-macena-hopper"
            }
        })
            .then((response)=>{
                console.log('Sucesso', response.data.result.list)
                this.setState({tabela: response.data.result.list })
            })
            .catch((error)=>{
                console.log('Erro',error.response.data)
            })
    }
    criarCadastro = () => {
        const body = {
            name:this.state.inputCadastro,
            "email": ""
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
                Authorization: "bruno-macena-hopper"
            }
        })
            .then(() => {
            console.log("Cadastro criado com sucesso")
            })
            .catch((error) => {
            console.log(error.response.data)
        })
    }
    render() {
        
        const list = this.state.tabela.map((cadaCadastro) => {
            return <h4>{ cadaCadastro.name}</h4>
        })
        return (
            <div>
                <button>Trocar de tela</button>
                <input
                    value={this.state.inputCadastro}
                    onChange={this.onChangeInput}
                
                />
                <input/>
            <button>Criar Usuário</button>
            </div>
        )
    }
}

export default integracaoApi;