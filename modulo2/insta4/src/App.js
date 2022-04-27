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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Bruno'}
          fotoUsuario={FotoBruno}
          fotoPost={FotoPostBruno}
        />

        <Post
          nomeUsuario={'João'}
          fotoUsuario={FotoJoao}
          fotoPost={FotoPostJoao}
        />
      </MainContainer>
    );
  }
}

export default App;
