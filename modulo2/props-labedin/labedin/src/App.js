import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem = "img/Bruno.jpeg" 
          nome ="Bruno Macena" 
          descricao="Me chamo Bruno de S. Macena, tenho 33 anos, estudante do curso Labenu no curso Full Stack e Backoffice da empresa Neobpo pelo grupo Águas do Brasil.
          Ingressei no mundo da informatica aos 15 anos e desde então busco me especializar a cada dia mais."
        />
        
        <ImagemButton 
          imagem="https://png.pngtree.com/png-clipart/20190619/original/pngtree-duplicate-content-line-black-icon-png-image_4008142.jpg"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Contatos</h2>
        <CardPequeno
          imagem="img/email1.png"
          descricao="Email: bdsm4@hotmail.com"
        />

        <CardPequeno
          imagem="img/localização.png"
          descricao="Endereço: Rua Peruana, São João de Meriti - RJ, CEP: 25555-541"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="img/Logo Labenu.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        <CardGrande
          imagem="https://seeklogo.com/images/N/neobpo-logo-A7E03F5530-seeklogo.com.png"
          nome="Neobpo"
          descricao="Agente de atendimento Backoffice"
        />


      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
