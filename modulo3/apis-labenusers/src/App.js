import React from 'react';
import axios from 'axios';

export default function App() {
  const solicitaDados = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: 'bruno-macena-hopper'
      }
    }).then((response) => {
      console.log(response.data)
    })
  }
  return (
    <div className='App'>
      <h1> Teste </h1>
      <input placeholder="Nome"/>
      <input placeholder="Email"/>
      <button onClick={solicitaDados}>Buscar dados</button>
    </div>
  );
}