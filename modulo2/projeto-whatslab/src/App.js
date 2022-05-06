import React from 'react';
import styled from 'styled-components';

const PrimeiroContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`
const SegundoContainer = styled.div`
  border: 2px solid #1fddff;
  width: 30vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
background: -webkit-linear-gradient(to top, #1fddff, #ff4b1f);
background: linear-gradient(to top, #1fddff, #ff4b1f);
`
const Footer = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
`
const InputOne = styled.input`
  width: 15vh;
  border-radius: 5px;
  padding: 5px;
  margin: 0 5px;
`
const InputTwo = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  margin: 0 5px;
`
const ChamaFuncao = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
`
const StyleButton = styled.button` 
  width: 15vh;
  border-radius: 5px;
  padding: 5px;
  margin: 0 5px;
  background-color: lightskyblue;
`
class Projeto extends React.Component {
  state = {
    whatslab: [
      {
        nick: "",
        message: ""
      },
      {
      nickInserir: "",
      messageInserir: ""
    }
  ],
};
    adicionaConversa = () => {

      const newMessage = {
       
        nick: this.state.nickInserir,
       
        message: this.state.messageInserir,

      };
      const newset = [newMessage, ...this.state.whatslab];
      this.setState({
         whatslab: newset,
         nickInserir: "",
         messageInserir: "",         
        });
    };
    onChangeNick = (event) => {
      this.setState({ nickInserir: event.target.value})
  }
  onChangeMessage = (event) => {
    this.setState({ messageInserir: event.target.value})
}
render() {

  const listaDeMensagens = this.state.whatslab.map((whats) => {
    return (
      <p>
         <b>{whats.nick}</b> <u>{whats.message}</u>
        </p>
        );
      });
      return (
        <PrimeiroContainer>
          <SegundoContainer>
          <ChamaFuncao>{listaDeMensagens}</ChamaFuncao>
            <Footer>
            <InputOne
              value={this.state.nickInserir}
              onChange={this.onChangeNick}
              placeholder={"Nick"}
            />
            <InputTwo
              value={this.state.mesageInserir}
              onChange={this.onChangeMessage}
              placeholder={"Message"}
            />
            <StyleButton onClick={this.adicionaConversa}>Enviar</StyleButton>
            </Footer>
          </SegundoContainer>
          
        </PrimeiroContainer>
      )
    }
}

export default Projeto; 

