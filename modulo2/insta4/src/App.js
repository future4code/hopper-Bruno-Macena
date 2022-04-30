import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import FotoBruno from './img/Bruno-logo.jpg'
import FotoPostBruno from './img/Windows-XP.webp'
import FotoJoao from './img/JohnWick.jpg'
import FotoPostJoao from './img/Windows7.jpg'
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
post: [
{
          nomeUsuario:"Paulinha",
          fotoUsuario:"https://picsum.photos/50/50",
          fotoPost:"https://picsum.photos/200/150"
},
{
          nomeUsuario:"Bruno",
          fotoUsuario: FotoBruno,
          fotoPost: FotoPostBruno
},
{
          nomeUsuario:"João",
          fotoUsuario:FotoJoao,
          fotoPost:FotoPostJoao
}
],
valorInputUsuario:"",
valorInputFoto:"",
valorInputPost:""

  }

  adicionaPostagem = () => {
    const novaPostagem = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost:this.state.valorInputPost
    }
    const novoPost = [novaPostagem, ...this.state.post]
    this.setState({post:novoPost})
  }
  onChangeInputUsuario = (event) =>{
    this.setState({ valorInputUsuario:event.target.value})
  }
  onChangeInputFoto = (event) =>{
    this.setState({
      valorInputFoto:event.target.value
    })
  }
  onChangeInputPost = (event) =>{
    this.setState({
      valorInputPost:event.target.value
    })
  }
  render() {

const listaDados = this.state.post.map((perfil) =>{
      return(
        
<Post key = {Math.random()}
post = {perfil}
/>
  )})
    return (
      <MainContainer>
       
      <input
      value={this.state.valorInputUsuario}
      onChange={this.onChangeInputUsuario}
      placeholder={"Nome Usuário"}
      />
      <input
      value={this.state.valorInputFoto}
      onChange={this.onChangeInputFoto}
      placeholder={"Foto Perfil"}
      />
      <input
      value={this.state.valorInputPost}
      onChange={this.onChangeInputPost}
      placeholder={"Foto Postagem"}
      />
      <button onClick={this.adicionaPostagem}>Postar</button>
  
     <div>{listaDados} </div>

      </MainContainer>
    )
}
}
export default App
